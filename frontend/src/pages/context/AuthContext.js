//contex o redux
import { createContext,useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE ={ // Rappresenta lo stato iniziale
    user : JSON.parse(localStorage.getItem("user")) || null, //Il primo se è stato effettuato il login, il secondo se non è stato effettuato
    isFetching: false, 
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider  = ({children}) =>{ //children rappresenta l'applicazione, si stanno condividendo tutti quei valori con l'applicazione
    const [state, dispatch] = useReducer(AuthReducer,INITIAL_STATE);

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.user));
    },[state.user])


    return(
        <AuthContext.Provider value={{user:state.user, isFetching:state.isFetching, error: state.error, dispatch}}> 
            {children} 
        </AuthContext.Provider>
    )
}
