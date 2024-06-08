/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput} from 'react-native';
import {Icon} from '@rneui/themed';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebaseinit';


function BottomeSection(p:any) {

  const stack = p.bs_stack;

  function gotoSignup() {
    stack.navigate('Signup');
  }
      
  return (
    <View style={{flexDirection: 'row', marginTop: 10}}>
      <TouchableOpacity onPress={gotoSignup}>
        <View
          style={{
            height: 70,
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
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
      </TouchableOpacity>

      <View
        style={{
          height: 70,
          flex: 1,
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
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


function SinginButton(p:any) {

    const u_email = p.u_email;
    const u_password = p.u_password;

  function getUser() {
   getDocs(
    query(
      collection(db, 'Users')
      ,where('email','==',u_email.toLowerCase()))).then(ds=>{
        if(ds.size == 1){
          const dt = ds.docs[0].data();
            if(dt.password == u_password){
              p.sb_stack.navigate('HomPage');
            }else{
              Alert.alert('Message', 'incorrect email or password');
              console.log('incorrect email or password');
              
            }
        }else{
          Alert.alert('Message', "can't find this user");
          console.log("can't find this user");
          
        }
      })
  }

function gotoHomPage() {

  getUser();
// if(u_email.toLowerCase()==email && u_password==password){
//   console.log('correct email and password');
//   p.sb_stack.navigate('HomPage');
  
// }else{
//   Alert.alert('Message', 'incorrect email or password');
//   console.log('incorrect email or password');
// }

  
}

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
    <TouchableOpacity activeOpacity={0.5} onPress={gotoHomPage}>
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
      </TouchableOpacity>
    </View>
  );
}

function LoginField(p:any) {

  const stack = p.lf_stack;

const [userEmail, setUserEmail] = React.useState('');
const [userPassword, setUserPassword] = React.useState('');

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
          onChangeText={(v) => setUserEmail(v)}
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
          secureTextEntry={true}
          onChangeText={(v) => setUserPassword(v)}
          style={{fontSize: 15}}
        />
      </View>
      <SinginButton u_email = {userEmail} u_password = {userPassword}  sb_stack={stack} />
      <BottomeSection bs_stack={stack}/>
    </View>
  );
}


const LoginScreen = (ls_props: any) => {

  const stack = ls_props.navigation;
  
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
          <LoginField lf_stack={stack} />
        </KeyboardAwareScrollView>
      </View>
    );
  };
  
  const sty = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#yellow',
    },
  });




export default LoginScreen;
