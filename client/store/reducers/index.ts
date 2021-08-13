import { combineReducers } from 'redux';
import { playerReducer } from './playerReducer';

export const reducer = combineReducers({
  player: playerReducer
})

export type RootState = ReturnType<typeof reducer>