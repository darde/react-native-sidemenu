import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => ({
  routes: state.routes.routeStack.slice(),
  activeRoute: state.routes.activeRoute,
});

export default connect(
  mapStateToProps,
)(App);
