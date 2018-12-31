import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Linking,
  StyleSheet
} from 'react-native';

const Credits = () => (
  <ScrollView contentContainerStyle={styles.view}>
      <Text style={styles.h1}>Credits</Text>
      <Text style={[styles.text, styles.p]}>This template uses images
        from <Text onPress={() =>
          Linking.openURL('https://github.com/oblador/react-native-vector-icons')}
          style={styles.linkCredits}
        >
          Mental Floss </Text> web site.
      </Text>
      <Text style={[styles.text, styles.p]}>This tamplate also uses icon
        fonts from <Text onPress={() =>
        Linking.openURL('https://github.com/oblador/react-native-vector-icons')}
        style={styles.linkCredits}
      >
        React Native Vector Icons</Text>.
      </Text>
    </ScrollView>
);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'flex-start',
    marginTop: 20,
    marginBottom: 20,
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
  }
});

export default Credits;
