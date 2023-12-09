import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from './Backgroud';
import {darkGreen} from './Constants';
import Btn from './Btn';
import Field from './Field';
import { StyleSheet,} from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import Home from './Home';
import Landing from './Landing';

const Recover = (props) => {
  return (
    <Background>
    <View style={{alignItems: 'center', width: 460}}>
      
      <Text
        style={{
          color: 'white',
          fontSize: 64,
          fontWeight: 'bold',
          alignContent: 'center',
          alignItems: 'center',
          marginLeft: -120,
          marginVertical: 20,
          marginTop: 30,
        }}>

          <View className="flex-end justify-start" style={{width: '78%', paddingRight: 34, marginBottom: 180}}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}
          className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        
        Recovery

      </Text>

      <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 120,
            borderTopRightRadius: 120,
            paddingTop: 100,
            alignItems: 'center',
            marginLeft: -60,
          }}>
          <Text style={{fontSize: 40, color: darkGreen, fontWeight: 'bold'}}>
            Restore Password
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your Email
          </Text>
          <Field
            placeholder="Email - Address"
            keyboardType={'email-address'}
          />
         
      
          
          
          <Btn textColor='white' bgColor={darkGreen} btnLabel="Send Reset Instruction" Press={() => {
              alert('Message has been sent to your email');
              props.navigation.navigate('Login');
            }} />
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>↺ Back to Login</Text>
            </TouchableOpacity>
          </View>

          </View>
      </View>
      </Background>
  );
}

const styles = StyleSheet.create({});

export default Recover;