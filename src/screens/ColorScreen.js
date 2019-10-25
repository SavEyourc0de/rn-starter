import React, {useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ColorScreen =() => {
const [color, setColor] = useState([]);

    return (
        <View>
            <Button 
                title={'Add Color'}
                onPress={()=>
                    setColor([...color, randomColor()])
                }
            />
                <FlatList style={styles.display}
                    horizontal={true}
                    keyExtractor={color => color}
                    data={color}
                    renderItem={({color}) => {
                        return (
                            <View style={{height: 100, width: 100, backgroundColor: randomColor()}} />
                        );
                    }}
                />
        </View>
    );
}
const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
    display: {
        display: "flex",
        flexWrap: "wrap"
    }
});
export default ColorScreen;