import { IUser } from "./IUser";

interface IUsers {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUser[];
}
export default IUsers;
