import * as React from "react";
import { IContextInterface } from "./interfaces";

export const myContext = React.createContext<IContextInterface | {}>({});

export const AppContextProvider = myContext.Provider;

export const AppContextConsumer = myContext.Consumer;
