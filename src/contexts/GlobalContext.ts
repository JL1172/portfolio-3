import { createContext } from "react";

const initialState: Record<string, boolean | string> = {
    global_dim: false,
}
export const GlobalContext = createContext(initialState);