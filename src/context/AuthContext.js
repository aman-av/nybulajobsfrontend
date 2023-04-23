import {  createContext, useContext,useState,useEffect } from "react";
const UserContext = createContext()

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState({});

    const func = async () => {
        const user = await JSON.parse(localStorage.getItem("user"));
        setUser(user);
    }
    useEffect(() => {
        func();
    }, []);
    
    
    const logout = () => {
        console.log('logout');
       localStorage.removeItem("user");
        setUser({});
    }

    const signIn = (obj) => {
        setUser(obj);
        localStorage.setItem("user", JSON.stringify(obj));
    }   

    return (
        <UserContext.Provider value={{ user,logout,signIn }}>
            {children}
        </UserContext.Provider>
    );
}

export const UserAuth = () => {
    return useContext(UserContext)
}