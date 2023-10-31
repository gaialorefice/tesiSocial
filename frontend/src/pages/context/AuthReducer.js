//reducer inidca quali proprietà verranno aggiornate allo stato iniziale, dopo l'effettuazione della prima azione(login) viene creato un nuovo stato con isfetching true, 
//dopodiché ci sono più possibilità, la prima è la creazione di uno stato di successo e viene aggiornato user, niente fetching
//seconda possibilità: errore user null, fetch false , error true

const AuthReducer = (state,action) =>{
    switch(action.type){

        default: return state;

        case "LOGIN_START":
            return{
                user: null,
                isFetching: true,
                error:false,
            };

        case "LOGOUT":
            return{
                user: null,
                isFetching: false,
                error:false,
            };

        case "LOGIN_SUCCESS":
            return{
                user: action.payload, //passo i dati utente
                isFetching: false,
                error:false,
            };

        case "LOGIN_FAILURE":
            return{
                user: null,
                isFetching: false,
                error:action.payload,
            };
         case "FOLLOW":
            return{
                ...state, //usa l'ultimo stato
                user: {
                    ...state.user, //PRENDE I DATI DELLO STATO
                    followings: [...state.user.followings,action.payload],
                   },
            };
        case "UNFOLLOW":
             return{
                ...state, //usa l'ultimo stato
                user: {
                    ...state.user,
                     followings: state.user.followings.filter((followings) => followings !== action.payload), //controlla tutti gli elementi allinterno adell'array per farli rimanere
                },
            };
    }
};

export default AuthReducer