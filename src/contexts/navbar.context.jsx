import { createContext, useState } from "react";

export const NavbarContext = createContext({
    activeLink: 0,
    setActiveLink: () => null,
});

export const NavbarProvider = ({ children }) => {
    const [activeLink, setActiveLink] = useState(0);
    const value = { activeLink, setActiveLink };

    return <NavbarContext.Provider value={value}> {children}</NavbarContext.Provider>
};