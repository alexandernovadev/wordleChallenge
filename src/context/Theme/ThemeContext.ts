import { createContext } from "react";

export interface contextThemeProps {
  theme: string,
  setTheme: Function
}
export const ThemeContext = createContext({} as contextThemeProps);
