import { createContext } from "react";

type GlobalContextType = {
    changeBrightness: () => void;
    isDim: boolean;
}
export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);