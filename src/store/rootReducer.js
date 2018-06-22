import { combineReducers } from 'redux';
import arts from '../reducers/artsReducer';

const rootReducer = combineReducers({
  arts,
});

export default rootReducer;
