import React, { Component, PropTypes } from 'react';

import {
  ScrollView,
  View,
  Image,
  Text,
  Linking,
  StyleSheet
} from 'react-native';

import { lighthouses } from '../../data.service';

const LighthouseBody = (props) => {
  const title = lighthouses[props.pageIndex].title;
  const content = lighthouses[props.pageIndex].content;
  const image = lighthouses[props.pageIndex].image;
  const photo = lighthouses[props.pageIndex].photo;
  const photoUrl = lighthouses[props.pageIndex].url;
  return(
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.h1}>{title}</Text>
        <View style={styles.figure}>
          <Image source={{ uri: image }} style={styles.img}/>
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
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 15
  },
  h1: {
    fontSize: 22,
    marginBottom: 20
  },
  p: {
    fontSize: 16,
    lineHeight: 24
  },
  figure: {
    marginBottom: 20,
  },
  img: {
    width: 300,
    height: 300,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: '#000'
  },
  credits: {
    flexDirection: 'row'
  },
  labelCredits: {
    fontSize: 18
  },
  linkCredits: {
    fontStyle: 'italic',
    color: '#2962FF'
  }
});

/*class Lighthouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.pageIndex - 1
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.pageIndex !== nextProps.pageIndex) {
      this.setState({
        index: nextProps.pageIndex - 1
      });
    }
  }

  render() {
    return(
      <ScrollView>
        <View>
          <Text>{lighthouses[this.state.index].title}</Text>
          <Image source={{ uri: lighthouses[this.state.index].image }} style={styles.image} />
          <Text>{lighthouses[this.state.index].content}</Text>
        </View>
      </ScrollView>
    );
  }
}

Lighthouse.propTypes = {
  pageIndex: PropTypes.number.isRequired
}*/

export default LighthouseBody;
