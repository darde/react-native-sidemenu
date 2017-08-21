export const CHANGE_ROUTE = 'CHANGE_ROUTE';
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';

export const changeRoute = route => ({
  type: CHANGE_ROUTE,
  route
});

export const toggleDrawer = () => ({
  type: TOGGLE_DRAWER,
});
