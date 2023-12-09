import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Background from './Backgroud';
import Btn from './Btn';
import { darkGreen } from './Constants';
import { green } from './Constants';

const Landing = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
      <Text style={{ color: 'white', fontSize: 64 }}>Let's start</Text>
      <Text style={{ color: 'white', fontSize: 56, marginBottom: 100 }}>Creating Things</Text>
      <Btn bgColor={green} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
      <Btn bgColor='white' textColor={darkGreen} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
      </View>

      
    </Background>
  );
}

const styles = StyleSheet.create({});

export default Landing;
