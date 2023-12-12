import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {appStyles} from '../utils/appStyles';
import {useState} from 'react';
import AccountName from '../components/AccountName';
import SelectedTokenDetails from '../components/SelectedTokenDetails';
import useFetchData from '../customHooks/useFetchData';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addTokenData} from '../redux/action';

const PayScreen = () => {
  const [amount, setAmount] = useState();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [data, selectedToken] = useFetchData();

  if (!selectedToken || !data) {
    return;
  }

  const handleAmount = text => {
    const enteredAmount = parseFloat(text);
    setAmount(enteredAmount);
  };

  const payAction = () => {
    const availableAmountString = selectedToken.tokenAmount;
    const availableAmount = parseFloat(availableAmountString);

    if (amount > availableAmount) {
      Alert.alert(
        'Insufficient Balance',
        `The available amount is ${availableAmount}`,
      );
    } else {
      updateStore(availableAmount);
      navigation.navigate('Success');
    }
  };

  const updateStore = availableAmount => {
    const updatedAmount = availableAmount - amount;
    const updatedTokens = data.tokens.map(item => {
      if (item.id === selectedToken.id) {
        return {...item, tokenAmount: updatedAmount};
      }
      return item;
    });
    const updatedTokenData = {...data, tokens: updatedTokens};
    dispatch(addTokenData(updatedTokenData));
  };

  return (
    <View style={appStyles.container}>
      <AccountName name={data.accountName} />
      <View style={[appStyles.centeredContent, {flex: 1}]}>
        <SelectedTokenDetails selectedToken={selectedToken} />
        <View style={[styles.textContainer]}>
          <TextInput
            style={[styles.tokenText,{flex:1}]}
            placeholder="Enter an amount"
            onChangeText={handleAmount}></TextInput>
          <Text style={styles.tokenText}>USD</Text>
        </View>
        <TouchableOpacity onPress={payAction}>
          <View style={styles.payButton}>
            <Text style={[styles.tokenText, {color: '#fff'}]}>Pay</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tokenText: {
    fontSize: responsiveFontSize(2.2),
  },
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
  payButton: {
    width: responsiveWidth(90),
    height: responsiveWidth(16),
    borderWidth: 1,
    borderRadius: responsiveWidth(5),
    backgroundColor: 'blue',
    marginTop: responsiveWidth(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default PayScreen;
