import {StyleSheet, View, Image, Text} from 'react-native';
import React from 'react';

import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {appStyles} from '../utils/appStyles';


const Avatar = ({data}) => {

  if(!data)
  return;

  return (
    <View style={[appStyles.centeredContent, {padding: responsiveWidth(2)}]}>
      <View style={[styles.avatarContainer, appStyles.centeredContent]}>
        <Image
          style={styles.avatarImage}
          source={require('../assets/images/avat.png')}
        />
      </View>
      <Text style={styles.accountName}>{data.accountName}</Text>
      <Text style={styles.accountName}>{data.accountBalance}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    width: responsiveWidth(40),
    height: responsiveWidth(40),
    borderRadius: responsiveWidth(50),
    backgroundColor: 'blue',
  },
  avatarImage: {
    width: responsiveWidth(24),
    height: responsiveWidth(22),
    resizeMode: 'contain',
  },
  accountName: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
  },
});

export default Avatar;
