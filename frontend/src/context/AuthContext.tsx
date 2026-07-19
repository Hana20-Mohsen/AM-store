import { createContext, useContext, useState, type ReactNode } from "react";


interface User {

  id: number;

  name?: string;

  email: string;

}



interface AuthContextType {

  user: User | null;

  login: (userData: User) => void;

  logout: () => void;

  isAuthenticated: boolean;

}



const AuthContext = createContext<AuthContextType | undefined>(undefined);




export function AuthProvider({ children }: { children: ReactNode }) {


  const [user, setUser] = useState<User | null>(() => {


    const savedUser = localStorage.getItem("user");


    return savedUser 
      ? JSON.parse(savedUser) 
      : null;


  });





  const login = (userData: User) => {


    setUser(userData);


    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );


  };





  const logout = () => {


    setUser(null);


    localStorage.removeItem("user");


  };





  return (

    <AuthContext.Provider

      value={{

        user,

        login,

        logout,

        isAuthenticated: !!user,

      }}

    >

      {children}

    </AuthContext.Provider>

  );

}





export function useAuth(){


  const context = useContext(AuthContext);



  if(!context){

    throw new Error(
      "useAuth must be used inside AuthProvider"
    );

  }



  return context;


}