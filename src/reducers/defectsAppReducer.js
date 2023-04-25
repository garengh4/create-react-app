import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { defectsReducer } from './defectsReducer';

export let defectsAppReducer = 
  combineReducers({userInfo: userReducer, defectsInfo: defectsReducer});