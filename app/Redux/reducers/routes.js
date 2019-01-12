import { NavigationActions } from 'react-navigation';
import * as Type from '../actions';
import routesMap from '../../Navigation/routes';

const routeState = {
  activeRoute: routesMap[0],
  routes : routesMap,
  navigator: null,
  activeRouteKey: routesMap[0].name,
};

const routes = (state = routeState, action) => {
  switch (action.type) {
    case Type.NAVIGATE_TO:
      state.navigator.dispatch(NavigationActions.navigate({ routeName: action.routeName }));
      return state;

    case Type.SET_NAVIGATOR:
      return {
        ...state,
        navigator: action.navigator,
      };

    case Type.SET_ACTIVE_ROUTE:
      return {
        ...state,
        activeRoute: state.routes.find(route => route.name === action.activeRouteName),
      };

    case Type.GO_BACK:
      state.navigator.dispatch(NavigationActions.back());
      return state;

    default:
      return state;
  }
};

export default routes;