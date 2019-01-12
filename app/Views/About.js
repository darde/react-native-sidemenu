import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Linking,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const About = () => (
  <ScrollView contentContainerStyle={styles.view}>
      <Text style={styles.h1}>About</Text>
      <Text style={[styles.text, styles.p]}>This is the third version of my React Native template. It is a
        sidemenu boilerplate for Android. It has some awesome features such as the new <Text onPress={() =>
          Linking.openURL('https://reactnavigation.org/')}
          style={styles.linkCredits}
        >React Navigation</Text> component, as well the awesom <Text onPress={() =>
          Linking.openURL('https://github.com/oblador/react-native-vector-icons')}
          style={styles.linkCredits}
        >React Native Vector Icons, </Text> Android overflow menu, e much more.
      </Text>
      <Text style={[styles.text, styles.p]}>You can use this project as a
        starting point for yours, as well as collaborate with improvements
        by github pull requests. This is a simple prototype and can be
        modified according to your needs.</Text>
      <Text style={[styles.text, styles.p]}>Thank you for trying my template.</Text>
      <Text style={styles.signature}>Pablo Rodrigo Darde</Text>
      <Text style={styles.position}>Front end engineer</Text>
      <View style={styles.social}>
        <Icon name="logo-linkedin" size={30} color="#2962FF" style={{marginRight: 10}} />
        <Text onPress={() =>
          Linking.openURL('https://www.linkedin.com/in/pablodarde')}
          style={styles.link}
        >
          www.linkedin.com/in/pablodarde
        </Text>
      </View>
      <View style={styles.social}>
        <Icon name="logo-github" size={30} color="#2962FF" style={{marginRight: 10}} />
        <Text onPress={() =>
          Linking.openURL('https://github.com/darde')}
          style={styles.link}
        >
          https://github.com/darde
        </Text>
      </View>
    </ScrollView>
);

const styles = StyleSheet.create({
  view: {
    marginTop: 20,
    padding: 20
  },
  h1: {
    fontSize: 22,
    alignSelf: 'center',
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10
  },
  p: {
    textAlign: 'left',
    marginBottom: 20
  },
  linkCredits: {
    fontStyle: 'italic',
    color: '#2962FF'
  },
  social: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10
  },
  signature: {
    fontSize: 16,
    marginBottom: 4,
  },
  position: {
    fontSize: 16,
    marginBottom: 10,
  },
  link: {
    fontSize: 16,
    color: '#2962FF'
  }
});

export default About;
