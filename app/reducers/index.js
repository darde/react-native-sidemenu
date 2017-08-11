import { combineReducers } from 'redux';
import routes from './routes';
import meds from './meds';

const rootReducer = combineReducers({
  routes,
  meds,
});

export default rootReducer;
