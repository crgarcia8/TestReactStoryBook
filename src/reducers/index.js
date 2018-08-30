import { combineReducers } from 'redux';
import CurrentSection from './reducer_current_section';
import clientsMock from './reducer_clients_mock';

const rootReducer = combineReducers({
  currentSection: CurrentSection,
  clients: clientsMock
});

export default rootReducer;
