import {
  action,
  makeObservable,
  observable,
  computed,
  runInAction,
} from 'mobx';
import Account from './Account';
import { UserType } from '../../commonTypes';
import { AxiosWrapper } from '../AxiosWrapper';

class AccountImpl implements Account {
  @observable private _account: UserType | undefined;

  constructor(
    protected readonly _root: {
      readonly axiosWrapper: AxiosWrapper;
    },
  ) {
    makeObservable(this);
  }

  @computed
  get account() {
    return this._account;
  }

  @action.bound
  fetchAccount = async () => {
    const response = await this._root.axiosWrapper.get<UserType>('/user');

    runInAction(() => {
      this._account = response.data;
    });
  };
}

export default AccountImpl;
