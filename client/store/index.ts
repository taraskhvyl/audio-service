import { Context, createWrapper, MakeStore } from 'next-redux-wrapper';
import { createStore, Store } from 'redux';
import { reducer, RootState } from './reducers';

//TODO: fix this
const makeStore: MakeStore<RootState> = (context: Context) => createStore(reducer);

export const wrapper = createWrapper<Store<State>>(makeStore, {debug: true});