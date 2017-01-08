import React, { Component } from 'react';

import {
  ScrollView,
  View,
  Text
} from 'react-native';

import LighthouseBody from './LighthouseBody';

const Lindau = ({ index }) => (
  <LighthouseBody pageIndex={index} />
);

export default Lindau;
