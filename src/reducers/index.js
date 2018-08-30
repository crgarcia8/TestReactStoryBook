import { combineReducers } from 'redux';
import CurrentSection from './reducer_current_section';
import { reducer as formReducer } from 'redux-form';
import clientsMock from './reducer_clients_mock';

const rootReducer = combineReducers({
  currentSection: CurrentSection,
  clients: clientsMock,
  form: formReducer
});

export default rootReducer;
