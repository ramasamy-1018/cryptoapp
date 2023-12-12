import {StyleSheet, Text, View} from 'react-native';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

const AccountName = ({name}) => {
  
  if(!name)
  return;

  return (
    <View style={styles.flexRow}>
      <Text style={styles.grayText}>To:</Text>
      <Text style={styles.blueText}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  grayText: {
    color: 'gray',
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
  },
  blueText: {
    color: 'blue',
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    paddingLeft: responsiveWidth(2),
  },
});

export default AccountName;
