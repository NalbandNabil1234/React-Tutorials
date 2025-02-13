import React, { createContext, useContext, useImperativeHandle } from "react";

const themeContext = createContext({
    themeMode: 'light',
    lightMode: () => {

    },
    darkMode: () => {

    }
})

export const ThemeContextProvider = themeContext.Provider

export default function useTheme(){
    return useContext(themeContext)
}
