import _axios from "./_axios";
import { IUsers } from "../types";

async function getUsers(page?: number): Promise<IUsers> {
  try {
    const res = await _axios.get("/users", { params: { page: page } });
    const data: IUsers = res.data;
    return data;
    
  } catch (error) {
    throw new Error("Problem with server");
  }
}

export { getUsers };
