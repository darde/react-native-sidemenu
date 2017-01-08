import React, { Component } from 'react';

import {
  ScrollView,
  View,
  Text
} from 'react-native';

import LighthouseBody from './LighthouseBody';

const Fanad = ({ index }) => (
  <LighthouseBody pageIndex={index} />
);

export default Fanad;
