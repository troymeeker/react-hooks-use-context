import React, { useState } from "react";

const UserContext = React.createContext();

function UserProvider({children}){
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState("dark")

    // const currentUser = {
    //     name:"Doug", 
    //     interests:[ "1", "2", "3"],
    // };
    return <UserContext.Provider value={{user, setUser, theme, setTheme}}>
        {children}
    </UserContext.Provider>
}

export { UserContext, UserProvider };