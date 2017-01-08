import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.view}>
      <Text style={styles.header1}>Lighthouses</Text>
      <Image
        source={{uri: 'cover'}}
        style={styles.img}
      />
      <Text style={styles.photo}>
        Pigeon Point Lighthouse, Pescadero, California
      </Text>
      <Text style={styles.text}>
        Know the most beautiful lighthouses of the world.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    padding: 20
  },
  img: {
    width: 300,
    height: 300,
    marginBottom: 10
  },
  header1: {
    fontSize: 24,
    marginBottom: 10
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 10
  },
  photo: {
    fontStyle: 'italic',
    marginBottom: 15
  }
});

export default Home;
