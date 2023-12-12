import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import {imageMapping} from '../constants/const';
import {useDispatch} from 'react-redux';
import {selectedToken} from '../redux/action';
import { useNavigation } from '@react-navigation/native';

const TokenContainer = ({item}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const didSelectRowOnFlatList = () => {
    dispatch(selectedToken(item));
    navigation.navigate('Pay')
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={didSelectRowOnFlatList}>
        <View style={styles.tokenContainer}>
          <View style={styles.tokenImageContainer}>
            <Image
              style={styles.tokenImage}
              source={imageMapping[item.tokenImage]}
            />
          </View>
          <View style={styles.columnContainer}>
            <View style={styles.tokenTextContainer}>
              <Text style={styles.tokenText}>{item.tokenName}</Text>
              <Text style={styles.tokenText}>${item.tokenAmount}</Text>
            </View>
            <View style={styles.tokenTextContainer}>
              <Text style={styles.tokenText}>{item.tokenId}</Text>
              <Text style={styles.tokenText}>{item.tokenPercentage}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  tokenContainer: {
    backgroundColor: '#fff',
    height: responsiveWidth(18),
    width: responsiveWidth(90),
    marginTop: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(2),
    elevation: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tokenImageContainer: {
    width: '12%',
  },
  tokenImage: {
    height: responsiveWidth(12),
    width: responsiveWidth(12),
  },
  columnContainer: {
    flex: 1,
    marginLeft: responsiveWidth(3),
  },
  tokenTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: responsiveWidth(0.5),
  },
  tokenText: {
    fontSize: responsiveFontSize(2.2),
  },
});

export default TokenContainer;
