
import { createStore } from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

window.syllable = Object.assign(window.syllable || {}, { store });

export default store;
