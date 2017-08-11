import {
  CHANGE_ROUTE,
} from '../actions';


const initial_state = {
  routeStack: [
    { title: 'app-title' },
    { title: 'alpine-skiing-title' },
    { title: 'help-title' },
    { title: 'about-title' },
  ],
  activeRoute: 0, 
};

export default routes = (state = initial_state, action) => {
  switch (action.type) {
    case CHANGE_ROUTE:
      return Object.assign({}, state, {
        ...state,
        activeRoute: action.route,
      });
    default:
      return state;
  }
};
