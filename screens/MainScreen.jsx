import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';

import AudioSwitchItem from '../components/AudioSwirchItem';
import TEST from '../components/TEST';



const MainScreen = () => {
  return (
    <SafeAreaView style={styles.main}>
      <AudioSwitchItem/>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    backgroundColor: "#fff",
  },


  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    flexDirection:"row"
    
  },
});


export default MainScreen;