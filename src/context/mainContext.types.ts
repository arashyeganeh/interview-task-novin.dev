export interface IUser {
  userToken: string | null;
}

export interface IMainContextProps {
  children: React.ReactNode;
}

export interface IContextReturn extends IUser {
  dispatch: (key: string, value: any) => void;
}
