/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TextInput } from 'react-native';
import {Icon} from '@rneui/themed';



function LoginField() {
    return (
      <View style={{marginTop: 100}}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 20,
            height: 50,
            marginHorizontal: 30,
            justifyContent: 'center',
            paddingLeft: 20,
          }}>
          <TextInput
            placeholder="Your Email"
            placeholderTextColor={'black'}
            style={{fontSize: 15}}
          />
        </View>

        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            backgroundColor: 'white',
            borderRadius: 20,
            height: 50,
            marginHorizontal: 30,
            justifyContent: 'center',
            paddingLeft: 20,
            marginTop: 10,
          }}>
          <TextInput
            placeholder="Password"
            placeholderTextColor={'black'}
            style={{fontSize: 15}}
          />
        </View>
        <SinginButton />
        <BottomeSection />
      </View>
    );
  }

  function SinginButton() {
    return (
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{height: 70, flex: 1}}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: 700,
              marginLeft: 40,
            }}>
            Sign In
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-end',
            height: 70,
            flex: 1,
          }}>
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: '#367cfe',
              marginRight: 40,
              borderRadius: 200,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              size={20}
              color={'white'}
              name={'arrow-forward'}
              type="ionicon"
            />
          </View>
        </View>
      </View>
    );
  }
  function BottomeSection() {
    return (
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{height: 70, flex: 1, alignItems: 'flex-start',justifyContent:'center'}}>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              fontWeight: 700,
              marginLeft: 40,
            }}>
            Sign Up
          </Text>
        </View>

        <View style={{height: 70, flex: 1, alignItems: 'flex-end',justifyContent:'center'}}>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              fontWeight: 700,
              marginRight: 40,
            }}>
            Forget Password
          </Text>
        </View>
      </View>
    );
  }



const LoginScreen = () => {
  return (
    <View style={sty.container}>
    <Image
      style={{width: '100%', height: '100%', position: 'absolute'}}
      source={require('../../assets/img/img.jpg')}
    />
    <Text
      style={{
        fontSize: 45,
        color: 'white',
        fontWeight: 700,
        marginTop: 100,
        marginLeft: 20,
      }}>
      {'Welcome \nBack'}
    </Text>
    <KeyboardAwareScrollView keyboardShouldPersistTaps="never">
      <LoginField />
    </KeyboardAwareScrollView>
  </View>
  )
}


const sty = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#yellow',
    },
  });


export default LoginScreen

