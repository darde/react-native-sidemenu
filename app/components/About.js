import React from 'react';
import I18n from '../i18n';
import {
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import * as globalStyles from '../global-styles';

const About = () => (
  <ScrollView contentContainerStyle={styles.content}>
    <Text style={styles.title}>{I18n.t('about-title')}</Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  content: {
    ...globalStyles.screenFlex,
    padding: globalStyles.screenPadding,
  },
  title: {
    fontSize: globalStyles.titleFontSize,
  },
});

export default About;
