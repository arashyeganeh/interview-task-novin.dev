import _axios from "./_axios";
import { ILogin } from "../types";

interface IData {
  token: string;
}

interface IRes {
  data: IData;
  status: number;
}

async function auth(prop: ILogin): Promise<IData> {
  try {
    const res: IRes = await _axios.post("/login", prop);
    return res.data;
    
  } catch (error) {
    throw new Error("Problem with server");
  }
}

export default auth;
