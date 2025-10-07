import { UsersImpl } from './Users';
import { AxiosWrapperImpl } from './AxiosWrapper';
import { SecureStorageImpl } from './SecureStorage';
import { RootStore } from './RootStore';
import { AccountImpl } from './Account';
import { TestCounterImpl } from "./TestCounter";

export default class RootStoreImpl implements RootStore {
  readonly secureStorage = new SecureStorageImpl();
  readonly axiosWrapper = new AxiosWrapperImpl(this);
  readonly users = new UsersImpl(this);
  readonly account = new AccountImpl(this);
  readonly testCounter = new TestCounterImpl();
}
