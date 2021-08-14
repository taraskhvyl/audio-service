import { Context, createWrapper, MakeStore } from 'next-redux-wrapper';
import { applyMiddleware, createStore, Store } from 'redux';
import { reducer, RootState } from './reducers';

const makeStore = (context: Context) => createStore(reducer, applyMiddleware);

export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});