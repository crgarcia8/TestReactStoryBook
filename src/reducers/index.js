import { combineReducers } from 'redux';
import CurrentSection from './reducer_current_section';

const rootReducer = combineReducers({
  currentSection: CurrentSection
});

export default rootReducer;
