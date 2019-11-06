import React, {useState, useReducer} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import SquareScreenDetail from '../components/SquareScreenDetail';

const COLOR_INCREMENT = 20;
const COLOR_DECREMENT = 20;

const reducer = (state, action) => {
    switch(action.colorToChange) {
        case 'red':
            return {...state, red: state.red + action.amount};
        case 'green':
            return {...state, green: state.green + action.amount};
        case 'blue':
            return {...state, blue: state.blue + action.amount};
        default:
            return state;
    }
};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const {red, green, blue} = state;
    
    return (
        <View>
            <SquareScreenDetail 
                color={'red'}
                onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT})}
                onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_DECREMENT})}
            />
            <SquareScreenDetail 
                color={'green'}
                onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_DECREMENT })}
            />
            <SquareScreenDetail 
                color={'blue'}
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_DECREMENT})}
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