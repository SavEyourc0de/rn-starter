import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('Components')} 
        title={'Go to Components Demo'}
      />

      <Button onPress={() => navigation.navigate('List')}
      title={'Go to List'}
      />

      <Button
        title={'To image Screen'}
        onPress={() => navigation.navigate('Image')}
      />

    <Button 
        title = {'Counter Screen'}
        onPress={() => navigation.navigate('Counter')}
    />

    <Button 
      title={'Color Screen'}
      onPress={() => navigation.navigate('Color')}
    />

    <Button
      title={'Square Screen'}
      onPress={() => navigation.navigate('Square')}
    />

    <Button
      title={'Text Screen'}
      onPress={() => navigation.navigate('Text')}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 30
  },
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
