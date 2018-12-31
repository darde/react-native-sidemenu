import React from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  Linking,
  StyleSheet
} from 'react-native';
import { lighthouses } from '../data';
import lighthouseStyles from './lighthouse.styles';

const title = lighthouses[5].title;
const content = lighthouses[5].content;
const image = lighthouses[5].image;
const photo = lighthouses[5].photo;
const photoUrl = lighthouses[5].url;

const Bass = () => (
  <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.h1}>{title}</Text>
      <View style={styles.figure}>
        <Image source={require('../img/lighthouse_hercules.jpg')} style={styles.img}/>
        <View style={styles.credits}>
          <Text style={styles.labelCredits}>Photo: </Text>
          <Text
            style={[styles.linkCredits, styles.labelCredits]}
            onPress={() => Linking.openURL(photoUrl)}
          >
            {photo}
          </Text>
        </View>
      </View>
      <Text style={styles.p}>{content}</Text>
  </ScrollView>
);

Bass.navigationOptions = ({ navigation }) => ({
  title: 'Bass',
});

const styles = StyleSheet.create(lighthouseStyles);

export default Bass;
