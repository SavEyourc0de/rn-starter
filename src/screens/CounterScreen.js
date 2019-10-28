import React,  {useState} from 'React';
import { Text, View, Button, StyleSheet } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter]= useState(0);

    return (
        <View>
            <Text>Current Counter: {counter}</Text>

            <Button
                style={styles.button}
                title='Increase'
                onPress={() => setCounter(counter + 1)}
            />
            <Button
                style={styles.button}
                title='Decrease'
                onPress={() => setCounter(counter - 1)}
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