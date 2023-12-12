import {StyleSheet, View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    responsiveFontSize,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import Clipboard from '@react-native-clipboard/clipboard';


const ButtonRow = () => {

  const navigation = useNavigation();

  const copyToClipboard = async () => {
    const textToCopy = 'gkprimary@etherum.in';

    try {
      await Clipboard.setString(textToCopy);
      ToastAndroid.show('Text copied to clipboard', ToastAndroid.CENTER);
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };

  return (
    <View style={styles.buttonRow}>
      <TouchableOpacity>
        <View style={styles.buttonContainer}>
          <Icon name={'plus'} size={responsiveWidth(5)} color={'#fff'} />
        </View>
        <Text style={styles.buttonText}>Buy</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Send')}>
        <View style={styles.buttonContainer}>
          <Icon name={'share'} size={responsiveWidth(5)} color={'#fff'} />
        </View>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={copyToClipboard}>
        <View style={styles.buttonContainer}>
          <Icon name={'copy'} size={responsiveWidth(5)} color={'#fff'} />
        </View>
        <Text style={styles.buttonText}>Copy</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: responsiveWidth(4),
  },
  buttonContainer: {
    width: responsiveWidth(16),
    height: responsiveWidth(16),
    borderRadius: responsiveWidth(50),
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
    paddingTop: responsiveWidth(1),
  },
});

export default ButtonRow;
