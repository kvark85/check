import { action, makeObservable, observable, computed } from 'mobx';
import TestCounter from './TestCounter';

class TestCounterImpl implements TestCounter {
  @observable private _counter = 0;

  constructor() {
    makeObservable(this);
  }

  @computed get counter() {
    return this._counter;
  }

  @action.bound
  increment() {
    this._counter += 1;
  }

  incrementWithDelay = async () => {
    setTimeout(this.increment, 3000);
  };
}

export default TestCounterImpl;
