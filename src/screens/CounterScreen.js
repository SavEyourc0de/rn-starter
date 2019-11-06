import React,  {useState, useReducer} from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const reducer = (state, action) => {
    switch(action.type) {
        case 'inc':
            return {...state, count: state.count + 1};
        case 'dec':
            return {...state, count: state.count - 1};
        default:
            return state;
    }
}

const CounterScreen = () => {
    const [counter, setCounter]= useState(0);
    const [state, dispatch] = useReducer(reducer, {count: 0});
    console.log(counter);
    

    return (
        <View>
            <Text>Current Counter: {state.count}</Text>

            <Button
                style={styles.button}
                title='Increase'
                onPress={() => dispatch({type: 'inc'})}
            />
            <Button
                style={styles.button}
                title='Decrease'
                onPress={() => dispatch({type: 'dec'})} //setCounter(counter - 1)
            />
        </View>
    );
}

const styles=StyleSheet.create({
    button: {
        width: 50,
        margin: 10,
        backgroundColor: "red"
    }
});
export default CounterScreen;