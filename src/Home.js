import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Background from './Backgroud';
import Btn from './Btn';
import { darkGreen } from './Constants';
import { green } from './Constants';
import Back2 from './Back2';

const Home = (props) => {
  return (
    <Back2>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
      <Text style={{ color: 'white', fontSize: 64 }}>Welcome</Text>
      <Text style={{ color: 'white', fontSize: 26, marginBottom: 300 }}>Dear Users</Text>
      
      <Btn bgColor='white' textColor={darkGreen} btnLabel="Logout" Press={() => props.navigation.navigate("Login")} />
      </View>

      
    </Back2>
  );
}

const styles = StyleSheet.create({});

export default Home;
