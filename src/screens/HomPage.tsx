/* eslint-disable prettier/prettier */
import {View, Image, Text} from 'react-native';
import React from 'react';
import { Icon } from '@rneui/base';

const HomPage = () => {
  return (
    <View style={{flex: 1}}>
      <Header/>
    </View>
  );
};
const Header = () =>{
  return(
    <View style={
      {
        flexDirection: 'row',
        padding:'5%',
        alignItems: 'center',
        marginTop:'2%'
      }
    }>
      <Image style={
       { width:60,
        height:60,
      borderRadius:100
     }
      } source={require('../../assets/img/icon.jpg')}></Image>
      <View style={
        {
          flex:1,
          alignItems:'center'
        }
      }>
        <Text style={
          {
            fontSize:25,
            fontFamily:'Impact',
            color:'black'
          }
        }>Dough & Dreems</Text>
        <Text style={
          {
            fontSize: 16,
            fontFamily: 'Impact',
            color:'black'
          }
        }>Best Pizza in Anywhere</Text>
      </View>
      <View style={
        {
          width:40,
          height:40
        }
      }>
        <Icon size={35} type='ionicon' name='notifications-circle-outline'/>
      </View>
    </View>
  );
}

export default HomPage;
