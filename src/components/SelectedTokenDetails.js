import { Image, StyleSheet, Text, View } from "react-native";
import {imageMapping} from '../constants/const';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { appStyles } from "../utils/appStyles";
import { responsiveFontSize, responsiveWidth } from "react-native-responsive-dimensions";

const SelectedTokenDetails = ({selectedToken}) => {
  return (
      <View style={styles.textContainer}>
        <View style={styles.tokenImageContainer}>
          <Image
            style={styles.tokenImage}
            source={imageMapping[selectedToken.tokenImage]}
          />
        </View>
        <View style={styles.columnContainer}>
          <Text style={styles.tokenText}>{selectedToken.tokenName}</Text>
          <Text style={styles.tokenText}>${selectedToken.tokenAmount}</Text>
        </View>
        <Icon name={'chevron-right'} size={responsiveWidth(6)} color={'blue'} />
      </View>
  );
};

const styles = StyleSheet.create({
    textContainer: {
        width: responsiveWidth(90),
        height: responsiveWidth(20),
        borderWidth: 1,
        borderRadius: responsiveWidth(5),
        backgroundColor: '#fff',
        marginTop: responsiveWidth(5),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: responsiveWidth(2),
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
        marginLeft: responsiveWidth(6),
      },
      tokenText: {
        fontSize: responsiveFontSize(2.2),
      },
})

export default SelectedTokenDetails;