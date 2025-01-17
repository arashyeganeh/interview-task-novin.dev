import _axios from "./_axios";

import { IUser } from "../types";

async function getUser(userID?: number): Promise<IUser> {
  try {
    const res = await _axios.get(`/users/${userID}`);
    const data: IUser = res.data.data;
    return data;

  } catch (error) {
    throw new Error("Problem with server");
  }
}

export { getUser };
