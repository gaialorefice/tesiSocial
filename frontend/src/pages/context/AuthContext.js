//contex o redux
import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE ={ //rappresenta lo stao iniziale
    user : {
            _id:"65325b8ce45f8803bc227ff4",
            username:"percythearancinocat_",
            name:"percy",
            surname:"percy",
            email:"percy@percy.com",
            profilePicture:"",
            isAdmin:false,
            followings:[],
            followers:[],
    }, //perché non è stato effettuato il login
    isFetching: false, //determina se sta avvenendo il processo
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider  = ({children}) =>{ //cildren rappresenta l'applicazione, si stanno condividendo tutti quei valori con l'applicazione
    const [state, dispatch] = useReducer(AuthReducer,INITIAL_STATE);

    return(
        <AuthContext.Provider value={{user:state.user, isFetching:state.isFetching, error: state.error, dispatch}}> 
            {children} 
        </AuthContext.Provider>
    )
}