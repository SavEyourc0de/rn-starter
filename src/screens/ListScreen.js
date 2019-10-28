import React from 'react';
import {Text, View, StyleSheet, FlatList, Button} from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'friend 1', age: Math.floor(Math.random() * 25) + 20},
        { name: 'friend 2', age: Math.floor(Math.random() * 25) + 20},
        { name: 'friend 3', age: Math.floor(Math.random() * 25) + 20},
        { name: 'friend 4', age: Math.floor(Math.random() * 25) + 20},
        { name: 'friend 5', age: Math.floor(Math.random() * 25) + 20},
        { name: 'friend 6', age: Math.floor(Math.random() * 25) + 20},
        { name: 'friend 7', age: Math.floor(Math.random() * 25) + 20},
        { name: 'friend 8', age: Math.floor(Math.random() * 25) + 20},
    ];
    
    return ( //flatlist: element === {item: {'friend #1}, index: 0}
        <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={friend => friend.name}
            data={friends} 
            renderItem={({item}) => {
                return (
                    <View style={styles.textStyle}>
                        <Text style={styles.listText}>{item.name} - Age: {item.age}</Text>
                    </View>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    },
    listText: {
        fontSize: 30
    }
});
export default ListScreen;