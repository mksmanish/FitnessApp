import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import fitness from '../data/fitness';
import {sparkler} from '../assets';

const FitnessCards = () => {
  const FitnessData = fitness;
  return (
    <View>
      {FitnessData.map((item, key) => (
        <Pressable
          key={key}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 15,
          }}>
          <Image
            style={{height: 140, width: '95%', borderRadius: 10}}
            source={{uri: item?.image}}
          />
          <Text
            style={{
              position: 'absolute',
              color: 'white',
              fontSize: 17,
              fontWeight: '600',
              left: 25,
              top: 20,
            }}>
            {item?.name}
          </Text>
          <Image
            style={{
              height: 30,
              width: 30,
              tintColor: 'white',
              position: 'absolute',
              left: 20,
              bottom: 15,
            }}
            source={sparkler}
          />
        </Pressable>
      ))}
    </View>
  );
};

export default FitnessCards;

const styles = StyleSheet.create({});
