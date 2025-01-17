import React, { useState, createContext } from "react";
import { IContextReturn, IMainContextProps, IUser } from "./mainContext.types";

const UserContext = createContext<IContextReturn>({} as IContextReturn);

function MainContext(props: IMainContextProps) {
    const token: string | null = localStorage.getItem("token");

    const { children } = props;
    const [state, setState] = useState<IUser>({ userToken: token });

    function dispatch(key: string, value: any): void {
        setState({ ...state, [key]: value })
    }

    return <UserContext.Provider value={{ ...state, dispatch }}>{children}</UserContext.Provider>
}

export { UserContext };
export default MainContext;