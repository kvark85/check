import { UserType } from "../commonTypes";

interface Users {
  users: UserType[];
  findUsers(searchString: string): Promise<void>;
}

export default Users;
