import React, {useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import SquareScreenDetail from '../components/SquareScreenDetail';

const COLOR_INCREMENT = 20;
const COLOR_DECREMENT = 20;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    console.log(`Red: ${red}`);
    console.log(`Green: ${green}`);
    console.log(`Blue: ${blue}`);

    const validateColor = (color) => {
        if (color >= 255 || color <= 0) {
            console.log(`error: ${color}`);
            return;
        }
    }
    
    return (
        <View>
            <SquareScreenDetail 
                color={'Red'}
                onIncrease={ () => setRed(red + COLOR_INCREMENT) }
                onDecrease={ () => setRed(red - COLOR_DECREMENT) }
            />
            <SquareScreenDetail 
                color={'Green'}
                onIncrease={ () => setGreen(green + COLOR_INCREMENT) }
                onDecrease={ () => setGreen(green - COLOR_DECREMENT) }
            />
            <SquareScreenDetail 
                color={'Blue'}
                onIncrease={ () => setBlue(blue + COLOR_INCREMENT) }
                onDecrease={ () => setBlue(blue - COLOR_DECREMENT) }
            />
            <View style={{
                height: 100,
                width: 100,
                backgroundColor: `rgb(${red},${green},${blue})`
            }}/>
        </View>
    );
}

const styles=StyleSheet.create({});
export default SquareScreen;