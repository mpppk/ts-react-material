import RaisedButton from 'material-ui/RaisedButton';
import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { counterActionCreators } from '../actionCreators';
import { IRootState } from '../reducer';

export type ClickEventHandler = (event: React.MouseEvent<HTMLElement>) => void;
const emptyClickEventHandler: ClickEventHandler = e => {}; // tslint:disable-line

export interface ICounterProps {
  count?: number;
  onClickAsyncIncrementButton?: ClickEventHandler;
  onClickIncrementButton?: ClickEventHandler;
  onClickDecrementButton?: ClickEventHandler;
}

export class Counter extends React.Component<ICounterProps, {}> {
  public static defaultProps: ICounterProps = {
    count: 0,
    onClickAsyncIncrementButton: emptyClickEventHandler,
    onClickDecrementButton: emptyClickEventHandler,
    onClickIncrementButton: emptyClickEventHandler
  };

  public render() {
    return (
      <div>
        <h1>Count: {this.props.count}</h1>
        <RaisedButton
          label="Async Increment"
          onClick={this.props.onClickAsyncIncrementButton}
        />
        <RaisedButton
          label="Increment"
          onClick={this.props.onClickIncrementButton}
        />
        <RaisedButton
          label="Decrement"
          onClick={this.props.onClickDecrementButton}
        />
      </div>
    );
  }
}

function mapStateToProps(state: IRootState) {
  return state.counter;
}

function mapDispatchToProps(dispatch: Dispatch<void>) {
  return { actions: bindActionCreators(counterActionCreators as {}, dispatch) };
}

// tslint:disable-next-line variable-name
export const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(
  Counter as any
);
