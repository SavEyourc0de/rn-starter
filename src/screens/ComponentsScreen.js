import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ComponentsScreen = () => {
    return (
    <View>
        <Text style={styles.textStyle}>Getting started with react native</Text>
        <Text style={styles.subHeaderStyle}>This is components screen.</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});
export default ComponentsScreen;