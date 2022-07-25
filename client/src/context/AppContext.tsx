import { createContext } from "react";
import { IUserLogged } from "../interfaces/userLogged";

interface IAppContext {
  user?: IUserLogged;
}

export const defaultState: IAppContext = {
  user: {
    username: "",
    email: "",
    logged: false,
  },
};

const AppContext = createContext<IAppContext>(defaultState);

export default AppContext;
