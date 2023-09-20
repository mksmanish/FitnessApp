import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {arrow, sparkler} from '../assets';

const WorkoutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <>
      <ScrollView style={{marginTop: 50}} showsVerticalScrollIndicator={false}>
        <Image
          style={{height: 200, width: '100%'}}
          source={{uri: route.params?.image}}
        />
        <Pressable
          onPress={() => navigation.goBack()}
          style={{position: 'absolute', left: 20, top: 25}}>
          <Image
            style={{
              height: 25,
              width: 25,
              position: 'absolute',
              tintColor: 'white',
            }}
            source={arrow}
          />
        </Pressable>
        <Image
          style={{
            height: 30,
            width: 30,
            position: 'absolute',
            right: 20,
            tintColor: 'white',
            top: 140,
          }}
          source={sparkler}
        />
        {route.params.exercises.map((item, index) => (
          <Pressable
            key={index}
            style={{margin: 10, flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={{uri: item?.image}}
              style={{width: 100, height: 100, borderRadius: 10}}></Image>
            <View style={{marginLeft: 30}}>
              <Text style={{fontSize: 19, fontWeight: '800'}}>
                {item?.name}
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 17,
                  fontWeight: '600',
                  color: 'gray',
                }}>
                x{item?.sets}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
      <Pressable
        style={{
          backgroundColor: 'green',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          width: '60%',
          alignSelf: 'center',
          borderRadius: 10,
          marginBottom: 20,
          height: 55,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '600',
            color: 'white',
          }}>
          Start
        </Text>
      </Pressable>
    </>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({});
