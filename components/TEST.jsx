import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View,Switch} from 'react-native';
import { Audio } from 'expo-av';

const TEST = () => {
    const [SwitchON, SetSwitchON] = useState(false);
    const [sound, Setsound] = useState();
    const [text, setText] =useState("OFF")

    useEffect(() => {
        const textTimer = setInterval(() => {
            setText((prevText) => !prevText);
        }, 1000);
        return function cleanup(){
            clearInterval(textTimer);
        };

    });
   

    
///////////////////////////////////////////



    return(
        <View>
        
            <Text>{text}</Text>
        </View>
    )


}


export default TEST;