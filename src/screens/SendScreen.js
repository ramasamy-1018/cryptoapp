import {StyleSheet, Text, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import FlatListComponent from '../components/FlatListComponent';
import useFetchData from '../customHooks/useFetchData';

const SendScreen = () => {
  const [data] = useFetchData();

  if(!data)
  return;

  const renderHeader = () => {
    return (
      <View style={styles.container}>
        <View style={styles.flexRow}>
          <Text style={styles.grayText}>To:</Text>
          <Text style={styles.blueText}>Gk Primary</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatListComponent data={data.tokens} renderHeader={renderHeader} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#f0f4f7',
    paddingVertical: responsiveWidth(5)
  },
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

export default SendScreen;
