import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View ,Button,Text,Alert,TouchableOpacity} from 'react-native';
import { useEffect, useState ,useRef} from "react";
import { Audio } from 'expo-av';


const AudioButtonItem =() => {
  const [count,setCount] = useState(0);
  const intervalRef = useRef(null);
  const soundObject = new Audio.Sound();
  soundObject.loadAsync(require('../assets/01.mp3'));
  const start = () => {
    if (intervalRef.current !== null) {//タイマーが進んでいる時はstart押せないように
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }else{
      setCount(count => count + 1);
      intervalRef.current =  setInterval( () => {
        soundObject.replayAsync();
        setCount(count => count + 1);
      }, 1000)
    };
  };
  return (
    <View style={styles.container}>
        <Button
          onPress={start}
          title = 'start'
        />
        <Text>{count}</Text>
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
});

export default AudioButtonItem;