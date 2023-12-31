import React from 'react';
import {View, ImageBackground} from 'react-native';

const Back2 = ({ children }) => {
    return (
      <View>
        <ImageBackground source={require("./assets/green1.jpg")} style={{ height: '100%' }} />
        <View style={{ position: "absolute" }}>
          {children}
        </View>
      </View>
    );
  }

export default Back2;