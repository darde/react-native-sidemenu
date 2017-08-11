import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  DrawerLayoutAndroid,
  ToolbarAndroid,
  StyleSheet,
  Navigator,
} from 'react-native';

import * as Menus from '../menus';
import Drawer from '../containers/DrawerContainer';
import ToolbarContainer from '../containers/ToolbarContainer';

import Home from './Home';
import AlpineSkiing from './AlpineSkiing';
import Help from './Help';
import About from './About';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerClosed: true,
    }
    this.handlesBackButton = this.handlesBackButton.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.setDrawerState = this.setDrawerState.bind(this);
  }

  handlesBackButton() {
    if (this.navigator && this.navigator.getCurrentRoutes().length > 1) {
      this.navigator.pop();
      return true;
    }
    return false;
  }

  toggleDrawer() {
    if (this.state.drawerClosed) {
      this.drawer.openDrawer();
    } else {
      this.drawer.closeDrawer();
    }
  }

  setDrawerState() {
    this.setState({
      drawerClosed: !this.state.drawerClosed
    });
  }

  render() {
    return(
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerBackgroundColor='rgba(0,0,0,.3)'
        ref={(drawerElement) => { this.DRAWER = drawerElement; }}
        drawerPosition={DrawerLayoutAndroid.positions.left}
        onDrawerOpen={this.setDrawerState}
        onDrawerClose={this.setDrawerState}
        renderNavigationView={() =>
          <Drawer menuItems={Menus.drawer} toggleDrawer={this.toggleDrawer} />}
        ref={(drawerElement) => { this.drawer = drawerElement; }}
      >
        <ToolbarContainer
          openDrawer={this.toggleDrawer}
          title={this.props.routes[this.props.activeRoute].title}
          actions={Menus.actions}
        />
         <Navigator
          initialRoute={this.props.routes[this.props.activeRoute]}
          initialRouteStack={this.props.routes}
          renderScene={(route, navigator) => {
            switch (this.props.activeRoute) {
              case 0:
                return <Home openDrawer={this.toggleDrawer} />;
              case 1:
                return <AlpineSkiing />;
              case 2:
                return <Help />;
              case 3:
                return <About />;
              default:
                return <Home openDrawer={this.toggleDrawer} />;
            }
          }}
          configureScene={(route, routeStack) =>
            Navigator.SceneConfigs.FloatFromRight
          }
          ref={(nav) => { this.navigator = nav; }}
        />
      </DrawerLayoutAndroid>
    );
  }
}

App.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })).isRequired,
  activeRoute: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  appBar: {
    height: 56,
    backgroundColor: '#fff',
    elevation: 4
  },
  appBarLogo: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  appBarTitle: {
    fontSize: 20,
    color: '#607D8B',
    paddingLeft: 10
  }
});

export default App;
