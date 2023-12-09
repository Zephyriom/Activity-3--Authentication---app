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
import fetchService from './services/fetchServices';


const Login = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({});

  const handleLogin = async () =>{
    try{
      if(email === '' ){
        setErrors({email:true});
        return false;
      }

      if(password === '' ){
        setErrors({ password:true });
        return false;
      }

      const url ='http://192.168.2.4/api/v1/login'
      const data = {
        email,
        password
      };

      const result= await fetchService.postData(url,data);
      console.log(result);
    }catch(e){
      console.debug(e.toString());
    }

  };


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
          marginLeft: -160,
          marginVertical: 20,
          marginTop: 30,
        }}>

          <View className="flex-end justify-start" style={{width: '78%', paddingRight: 90, marginBottom: 180}}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Landing')}
          className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        
        Login

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
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
            value={email}
            onChangeText={setEmail}
            error={errors?.email}
          />
          <Field placeholder="Password" 
          secureTextEntry={true} 
          value = {password}
          onChangeText={setPassword}
          error={errors?.password}
          />
      
          <TouchableOpacity
              onPress={() => props.navigation.navigate('Recover')}>
                <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 180}}>
              <Text style={{alignItems: 'flex-end', color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
            Forgot Password ?
            </Text>
            </View>
            </TouchableOpacity>
          
          <Btn textColor='white' bgColor={darkGreen} btnLabel="Login" Press={() => props.navigation.navigate('Home')} />
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight:"bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>

          </View>
      </View>
      </Background>
  );
}

const styles = StyleSheet.create({});

export default Login;