import React, {useState, useReducer} from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';

const TextScreen = () => {
    const [enteredName, setEnteredName] = useState('');
    const str = `${enteredName}`;

    const textInputHandler = (text) => {
        return (
            setEnteredName(text)
        );
    }

    return (
        <View>
            <TextInput style={styles.input}
                placeholder={"Enter Name"}
                onChangeText={textInputHandler}
                value={enteredName}
                maxLength={10}
            />
            {enteredName.length <= 5 ? <Text>min of 5 chars</Text> : null}
        </View>
    );
}
const styles=StyleSheet.create({
    input: {
        margin: 15,
        height: 30,
        width: 200,
        borderWidth: 1,
        borderColor: 'black',
        fontSize: 15
    }
});
export default TextScreen;