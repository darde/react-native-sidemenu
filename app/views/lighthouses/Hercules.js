import React, { Component } from 'react';

import {
  ScrollView,
  View,
  Text
} from 'react-native';

import LighthouseBody from './LighthouseBody';

const Hercules = ({ index }) => (
  <LighthouseBody pageIndex={index} />
);

export default Hercules;
