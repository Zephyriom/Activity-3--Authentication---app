import React from 'react';
import {View, ToastAndriod, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from './Backgroud';
import {darkGreen} from './Constants';
import Btn from './Btn';
import Field from './Field';
import { StyleSheet,} from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/solid'

const Signup = (props) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repassword, setRepassword] = React.useState("");
  const [showPass, setShowPass] = React.useState("false");
  const [showRePass, setShowRePass] = React.useState("false");
  const [loading, setLoading] = React.useState("false");

  const showToast =(message= "Somethinf Wen't Wrong") =>{
    ToastAndriod.show(message,3000);
  }

  const handleRegistration = async () =>{
    try{
      setLoading(true);
      const url = 'http://192.168.2.4/api/v1/register';
      const data = {
        name,
        email,
        password,
        repassword,

      };
      const result= await fetchService.postData(url,data);
      if (result.message !=null) {
        showToast(result?.message);
      }else{
        navigation.navigate("Home");
      }
    }catch(e){
      showToast(e.toString());
    } finally{
      setLoading(false);
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
          marginLeft: -120,
          marginVertical: 20,
          marginTop: 50,
        }}>
          <View className="flex-end justify-start" style={{width: '78%', paddingRight: 50, marginBottom: 180, paddingBottom:20,}}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}
          className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        Register
      </Text>
      <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 40,
            marginLeft: -60,
            marginTop: -20,

          }}>
          Create a new account
        </Text>
      <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 120,
            borderTopRightRadius: 120,
            paddingTop: 40,
            alignItems: 'center',
            marginLeft: -60,
          }}>

          <Field placeholder="Name"
                 mode= "outlined"
                 label="name"
                 value={name}
                 onChangeText={setName}

          />
      
          <Field
                placeholder="Email / Username"
                keyboardType={'email-address'}
                value={email}
                onChangeText={setEmail}
          />

          <Field placeholder="Password" 
                 secureTextEntry={true}
                 label="Passsword"
                 value={password}
                 onChangeText={setPassword}
                  />
                 

          <Field placeholder="Re-type Password" 
                 secureTextEntry={true}
                 value={repassword}
                 onChangeText={setRepassword}
                 
                 />
          
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16
            }}>
            <Text style={{color: 'grey', fontSize: 16}}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent :"center",
              width: '78%',
              paddingRight: 16,
              marginBottom: 10
            }}>
            <Text style={{color: 'grey', fontSize: 16}}>
              and {" "}
            </Text>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Privacy Policy
            </Text>
          </View>
          <Btn
            loading={!loading}
            textColor="white"
            bgColor={darkGreen}
            icon="account-plus"
            btnLabel="Signup"
            Press={() => {
              alert('Account created');
              props.navigation.navigate('Login');
            
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              loading={loading}
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({});

export default Signup;