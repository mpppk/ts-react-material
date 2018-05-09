import {combineReducers} from 'redux';
import {reducerWithInitialState} from 'typescript-fsa-reducers';
import {
    appActionCreators, counterActionCreators,
} from './actionCreators';

export interface IRootState {
    app: IAppState;
    counter: ICounterState;
}

export interface IAppState {
    isOpenDrawer: boolean;
}

export interface ICounterState {
    count: number;
}

const appInitialState: IAppState = { isOpenDrawer: false};
const counterInitialState: ICounterState = { count: 0 };

const app = reducerWithInitialState(appInitialState)
    .case(appActionCreators.toggleDrawer, (state) => ({ ...state, isOpenDrawer: !state.isOpenDrawer}));

const counter = reducerWithInitialState(counterInitialState)
    .case(counterActionCreators.clickIncrementButton, (state) => ({ ...state, count: state.count + 1}))
    .case(counterActionCreators.clickDecrementButton, (state) => ({ ...state, count: state.count - 1}))
    .case(counterActionCreators.requestAmountChanging, (state, payload) => ({
        ...state,
        count: state.count + payload.amount,
    }));

export const reducer = combineReducers({app, counter});
