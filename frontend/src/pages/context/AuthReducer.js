
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
                user: action.payload, //Passaggio dei dati dell'utente
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
                ...state, //Utilizza l'ultimo stato
                user: {
                    ...state.user, //PRENDE I DATI DELLO STATO
                    followings: [...state.user.followings,action.payload],
                   },
            };
        case "UNFOLLOW":
             return{
                ...state, 
                user: {
                    ...state.user,
                     followings: state.user.followings.filter((followings) => followings !== action.payload), //controlla tutti gli elementi all'interno dell'array 
                },
            };
    }
};

export default AuthReducer