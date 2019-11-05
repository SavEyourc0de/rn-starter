import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.viewFirstStyle}>Child #1</Text>
            <Text style={styles.viewSecondtStyle}>Child #two</Text>
            <Text style={styles.viewThirdStyle}>Child #tres</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        justifyContent: 'space-between',
        //flexDirection: 'row',
        height: 150
        //alignItems: 'flex-start' //flex-end, center
        //justifyContent: 'flex-start'
    },
    viewFirstStyle: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 4
    },
    viewSecondtStyle: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 4
    },
    viewThirdStyle: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 2
    },
    textStyle: {
        borderWidth: 1,
        borderColor: 'red'
    }
});
export default BoxScreen;