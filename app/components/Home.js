import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Linking,
} from 'react-native';
import I18n from '../i18n';
import bgApp from '../img/bg_app.jpg';

const gotoPressure = () => {

};

const Home = () => (
  <Image
    style={styles.container}
    source={bgApp}
  >
    <View style={styles.titleHolder}>
      <Text style={styles.appTitle}>Winter Olympic Games</Text>
    </View>
  </Image>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  titleHolder: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.2)',
    height: 200,
    width: Dimensions.get('screen').width,
  },
  appTitle: {
    color: '#fff', //'#3279ff',
    fontSize: 50,
    textAlign: 'center',
    textShadowColor: '#3279ff',
    textShadowOffset: { width: 0, height: 1 },
  }
});

export default Home;
