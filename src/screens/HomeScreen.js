// HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import {appStyles} from '../utils/appStyles';
import {response} from '../constants/const';
import Avatar from '../components/Avatar';
import ButtonRow from '../components/ButtonRow';
import FlatListComponent from '../components/FlatListComponent';4
import { useDispatch } from 'react-redux';
import { addTokenData } from '../redux/action';
import useFetchData from '../customHooks/useFetchData';

function HomeScreen() {
  
  const dispatch = useDispatch()
  const [data] = useFetchData();

  if(!data)
  return;

  useEffect(() => {
    dispatch(addTokenData(response))
  },[])

  const renderHeader = () => {
    return (
      <View style={appStyles.container}>
        <Avatar data={data}/>
        <ButtonRow />
      </View>
    );
  };

  return (
    <FlatListComponent data={data.tokens} renderHeader={renderHeader}/>
  );
}

export default HomeScreen;
