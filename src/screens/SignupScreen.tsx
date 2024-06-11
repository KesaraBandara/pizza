/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TextInput } from 'react-native';
import {Icon} from '@rneui/themed';
import { ActivityIndicator } from 'react-native-paper';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebaseinit';
import { useNavigation } from '@react-navigation/native';



function SignupSection() {

  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [saving,setSaving] = useState(false);

  const nav:any = useNavigation()

  function saveUser(){

    setSaving(true);
    addDoc(collection(db,'Users'),{
      name:name,
      email:email,
      password:password
    }).then(_t=>{
      setSaving(false);
      Alert.alert("user is successfully registerd")
      nav.navigate('Login')
    }).catch(_e=>{
      setSaving(false);
      Alert.alert("user account creation fail")
    })

    
  }

    return (
      <View style={{marginTop: 70}}>
        <View
          style={{
            backgroundColor: 'transparent',
            borderRadius: 70,
            height: 50,
            marginHorizontal: 30,
            justifyContent: 'center',
            paddingLeft: 20,
            marginTop: 10,
            borderWidth: 1,
            borderColor: '#ccc',
          }}>
          <TextInput
            onChangeText={(v)=>setName(v)}
            placeholder="Name"
            placeholderTextColor={'#aaa'}
            style={{fontSize: 18,color: 'white'}}
          />
        </View>

        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            backgroundColor: 'transparent',
            borderRadius: 70,
            height: 50,
            marginHorizontal: 30,
            justifyContent: 'center',
            paddingLeft: 20,
            marginTop: 10,
            borderWidth: 1,
            borderColor: '#ccc',
          }}>
          <TextInput
            onChangeText={(v)=>setEmail(v)}
            placeholder="Your Email"
            placeholderTextColor={'#aaa'}
            style={{fontSize: 18,color: 'white'}}
          />
        </View>

        <View
          style={{
            backgroundColor: 'transparent',
            borderRadius: 70,
            height: 50,
            marginHorizontal: 30,
            justifyContent: 'center',
            paddingLeft: 20,
            marginTop: 10,
            borderWidth: 1,
            borderColor: '#ccc',
          }}>
          <TextInput
            secureTextEntry
            onChangeText={(v)=>setPassword(v)}
            placeholder="Password"
            placeholderTextColor={'#aaa'}
            style={{fontSize: 18,color: 'white'}}
          />
        </View>
        
        <SignUpbutton sUser={saveUser} saving={saving} />
        <BottomeSection />
      </View>
    );
  }

  function SignUpbutton(p:any) {
    return (
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{height: 70, flex: 1}}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 700,
              marginLeft: 40,
            }}>
            Sign Up
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.5} onPress={p.sUser}>
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
            backgroundColor: 'white',
            marginRight: 40,
            borderRadius: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            {(p.saving)?(<ActivityIndicator  color="black" />):<Icon
            size={20}
            color={'black'}
            name={'arrow-forward'}
            type="ionicon"
          /> }
        </View>
      </View>
      </TouchableOpacity>
      </View>
    );
  }
  function BottomeSection() {
    return (
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{height: 70, flex: 1, alignItems: 'flex-end',justifyContent:'center'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              fontWeight: 700,
              marginRight: 40,
            }}>
            Sign in 
          </Text>
        </View>
      </View>
    );
  }



const SignupScreen = () => {
  return (
    <View style={sty.container}>
    <Image
      style={{width: '100%', height: '100%', position: 'absolute'}}
      source={require('../../assets/img/img8.jpg')}
    />
    <Text
      style={{
        fontSize: 45,
        color: 'white',
        fontWeight: 700,
        marginTop: 100,
        marginLeft: 20,
      }}>
      {'Create \nAccount'}
    </Text>
    <KeyboardAwareScrollView keyboardShouldPersistTaps="never">
      <SignupSection />
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


export default SignupScreen

