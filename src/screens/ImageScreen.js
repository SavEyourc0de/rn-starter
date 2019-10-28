import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';


const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
                title={'Beach'} 
                score={Math.random().toString()}
                imageSource={require('../../assets/beach.jpg')}
                />
            <ImageDetail 
                title={'Forest'}
                score={Math.random().toString()} 
                imageSource={require('../../assets/forest.jpg')}
                />
            <ImageDetail 
                title={'Mountain'}
                score={Math.random().toString()} 
                imageSource={require('../../assets/mountain.jpg')}
                />
        </View>

    );
}

const styles=StyleSheet.create({})
export default ImageScreen;
