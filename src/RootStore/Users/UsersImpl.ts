import {
  action,
  makeObservable,
  observable,
  computed,
  runInAction,
} from 'mobx';
import Users from './Users';
import { UserType } from '../../commonTypes';
import { AxiosWrapper } from '../AxiosWrapper';

class UsersImpl implements Users {
  @observable private _users: UserType[] = [];

  constructor(
    protected readonly _root: {
      readonly axiosWrapper: AxiosWrapper;
    },
  ) {
    makeObservable(this);
  }

  @computed
  get users() {
    return this._users;
  }

  @action.bound
  findUsers = async (searchString: string) => {
    const response =
      await this._root.axiosWrapper.get<UserType[]>('/user/find');

    runInAction(() => {
      this._users = response.data;
    });
  };
}

export default UsersImpl;
