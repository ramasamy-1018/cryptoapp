import {responsiveWidth} from 'react-native-responsive-dimensions';
import { FlatList,StyleSheet } from 'react-native';
import TokenContainer from './TokenContainer';


const FlatListComponent = ({data,renderHeader}) => {

  if(!data)
  return;

  return (
    <FlatList
      style={styles.flatList}
      data={data}
      renderItem={({item}) => <TokenContainer item={item} />}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={renderHeader}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    paddingHorizontal: responsiveWidth(5),
    backgroundColor: '#f0f4f7',
    marginBottom: responsiveWidth(1),
  },
});

export default FlatListComponent;
