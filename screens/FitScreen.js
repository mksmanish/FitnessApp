import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';

const FitScreen = () => {
  const route = useRoute();
  const [index, setIndex] = useState(0);
  const exercises = route.params?.exercises;
  const current = exercises[index];
  return (
    <SafeAreaView>
      <Image
        style={{height: 380, width: '100%'}}
        source={{uri: current?.image}}
      />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 30,
          marginRight: 'auto',
          marginLeft: 'auto',
          marginTop: 30,
        }}>
        {current?.name}
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 40,
          marginRight: 'auto',
          marginLeft: 'auto',
          marginTop: 20,
          color: 'gray',
        }}>
        x{current?.sets}
      </Text>
      <Pressable
        style={{
          backgroundColor: 'green',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          width: '50%',
          alignSelf: 'center',
          borderRadius: 15,
          marginTop: 30,
          height: 55,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '600',
            color: 'white',
          }}>
          Done
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default FitScreen;

const styles = StyleSheet.create({});
