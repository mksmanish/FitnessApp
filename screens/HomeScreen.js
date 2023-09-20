import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {home} from '../assets';
import FitnessCards from '../components/FitnessCards';
import {FitnessItems} from '../Context';
import {useContext} from 'react';

const HomeScreen = () => {
  const {
    completed,
    setCompleted,
    minutes,
    setMinutes,
    calories,
    setCalories,
    setWorkout,
    workout,
  } = useContext(FitnessItems);
  return (
    <ScrollView
      style={{
        marginTop: 40,
      }}>
      <View
        style={{
          backgroundColor: '#F0805B',
          padding: 10,
          height: 200,
          width: '100%',
        }}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 28,
            color: 'gray',
          }}>
          HOME WORKOUT
        </Text>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '500',
                color: 'white',
                fontSize: 19,
              }}>
              {workout}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '500',
                color: 'gray',
                fontSize: 18,
                marginTop: 5,
              }}>
              WORKOUT
            </Text>
          </View>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '500',
                color: 'white',
                fontSize: 19,
              }}>
              {parseFloat(calories).toFixed(2)}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '500',
                color: 'gray',
                fontSize: 18,
                marginTop: 5,
              }}>
              KCAL
            </Text>
          </View>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '500',
                color: 'white',
                fontSize: 19,
              }}>
              {parseFloat(minutes).toFixed(2)}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '500',
                color: 'gray',
                fontSize: 18,
                marginTop: 5,
              }}>
              MINS
            </Text>
          </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{
              width: '90%',
              height: 130,
              borderRadius: 10,
              marginTop: 30,
            }}
            source={home}
          />
        </View>
      </View>
      <View style={{marginTop: 65}}>
        <FitnessCards />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
