import {combineReducers} from 'redux';
import {default as PanoReducer} from './panos'

const allReducers = combineReducers({
  panoState : PanoReducer
});

export default allReducers
