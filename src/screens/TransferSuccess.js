import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {appStyles} from '../utils/appStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const TransferSuccess = () => {

  const navigation = useNavigation();

  return (
    <View style={appStyles.container}>
      <View style={[appStyles.centeredContent,{flex:1}]}>
        <Text style={styles.text}>Transfer Success</Text>
        <Icon name={'check'} size={responsiveWidth(20)} color={'green'} />
      </View>
      <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
          <View style={styles.doneButton}>
            <Text style={styles.buttonText}>
              Done
            </Text>
          </View>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: responsiveFontSize(4),
    fontWeight: 'bold',
    marginBottom: responsiveWidth(2)
  },
  doneButton: {
    width: responsiveWidth(90),
    height: responsiveWidth(16),
    borderWidth: 1,
    borderRadius: responsiveWidth(5),
    backgroundColor: 'blue',
    marginTop: responsiveWidth(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: responsiveFontSize(2.2),
    color: "#fff"
  },
});

export default TransferSuccess;
