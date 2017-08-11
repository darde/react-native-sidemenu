import { connect } from 'react-redux';
import Drawer from '../components/Drawer';
import {
  changeRoute as setNewRoute,
} from '../actions';

const mapStateToProps = (state, ownProps) => ({
  menuItems: ownProps.menuItems,
});

const mapDispatchToProps = dispatch => ({
  changeRoute: route => { dispatch(setNewRoute(route)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Drawer);
