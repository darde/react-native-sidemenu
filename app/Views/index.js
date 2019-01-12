import React from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  StyleSheet,
} from "react-native";
import { navigateTo } from "../Redux/actions";

const View = ({ activeRoute }) => (
  <ScrollView contentContainerStyle={styles.view}>
    {React.createElement(activeRoute.screen)}
  </ScrollView>
);

const mapStateToProps = state => ({
  activeRoute: state.routes.activeRoute,
});

const mapDispatchToProps = dispatch => ({
  navigate: routeName => { dispatch(navigateTo(routeName)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header1: {
    fontSize: 24,
    marginBottom: '20%',
  },
  text: {
    fontSize: 20,
    width: '70%',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: '20%',
  },
});
