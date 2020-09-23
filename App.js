import React from 'react';

import {StyleSheet, Text, View} from 'react-native';



import Click from './src/Click';



export default function App() {

  return (

    <View style={styles.container}>

      <Text>Hello</Text>

      <Click count={10}/>

    </View>

  );

}



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

    alignItems: 'center',

    justifyContent: 'center',

  },

})