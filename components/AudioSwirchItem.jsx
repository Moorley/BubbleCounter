import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View,Switch} from 'react-native';
import { Audio } from 'expo-av';

const AudioSwitchItem = () => {
    const [SwitchON, SetSwitchON] = useState(false);
    const [sound, Setsound] = useState();
    const [text, setText] =useState("OFF")


///////////////////////////////////////////////
    async function playSound() {
        const { sound } = await  Audio.Sound.createAsync (
            require("../assets/01.mp3")
        )
        Setsound(sound);
        await sound.playAsync();
    }



    useEffect(() => {
        return sound
          ? () => {
              sound.unloadAsync(); }
          : undefined;
      }, [sound]);

////////////////////////////////////////////
    const toggleswitch = () => {
        if (SwitchON) {
             Setsound()
            setText("OFF")

        }else {
            setInterval(playSound,1000)
            setText("ON")
        }
        SetSwitchON(previousState => !previousState)
    }

    
///////////////////////////////////////////



    return(
        <View>
            <Switch
            onValueChange={toggleswitch}
            value={SwitchON}
            />
            <Text>{text}</Text>
        </View>
    )


}


export default AudioSwitchItem;