import * as React from 'react';
import Landing from './src/Landing';
import Signup from './src/Signup';
import Login from './src/Login';
import Recover from './src/Recover';
import Home from './src/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions= {{headerShown:false}}>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Recover" component={Recover} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;