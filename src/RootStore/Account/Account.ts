import { UserType } from "../commonTypes";

interface Account {
  account: UserType | undefined;
  fetchAccount(): Promise<void>;
  reset(): Promise<void>;
}

export default Account;
