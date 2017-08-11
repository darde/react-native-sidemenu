import { connect } from 'react-redux';
import {
  changeRoute as setNewRoute,
} from '../actions';
import Toolbar from '../components/Toolbar';

const mapStateToProps = (state, ownProps) => ({
  actions: ownProps.actions,
  title: ownProps.title,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  openDrawer: () => { ownProps.openDrawer(); },
  changeRoute: route => { dispatch(setNewRoute(route)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Toolbar);
