import type { Users } from './Users';
import type { AxiosWrapper } from './AxiosWrapper';
import type { SecureStorage } from './SecureStorage';
import type { Account } from './Account';
import type { TestCounter } from './TestCounter';

export interface RootStore {
  readonly secureStorage: SecureStorage;
  readonly axiosWrapper: AxiosWrapper;
  readonly users: Users;
  readonly account: Account;
  readonly testCounter: TestCounter;
}
