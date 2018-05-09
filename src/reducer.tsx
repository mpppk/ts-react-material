import {Action, combineReducers} from 'redux';
import {isType} from 'typescript-fsa';
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

export const app = (state = appInitialState, action: Action) => {
    const newState = Object.assign({}, state);
    if (isType(action, appActionCreators.toggleDrawer)) {
        newState.isOpenDrawer = !newState.isOpenDrawer;
        return newState;
    }
    return state;
};

export const counter = (state = counterInitialState, action: Action): ICounterState => {
    if (isType(action, counterActionCreators.clickIncrementButton)) {
        return {...state, count: state.count + 1};
    }

    if (isType(action, counterActionCreators.clickDecrementButton)) {
        return {...state, count: state.count - 1};
    }

    if (isType(action, counterActionCreators.requestAmountChanging)) {
        return {...state, count: state.count + action.payload.amount};
    }

    return state;
};

export const reducer = combineReducers({app, counter});
