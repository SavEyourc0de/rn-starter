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
