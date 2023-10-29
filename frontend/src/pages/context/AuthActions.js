export const LoginStart = (userCredentials) =>({
    type:"LOGIN_START",
});

export const LoginSuccess = (user) =>({
    type:"LOGIN_SUCCESS",
    payload: user, //va al reducer
});

export const LoginError = (error) =>({
    type:"LOGIN_FAILURE",
    payload: error
});

export const Logout = () =>({
    type: "LOGOUT"
})

export const Follow = (userId) =>({
    type: "FOLLOW",
    payload: userId,
});

export const Unfollow = (userId) =>({
    type: "UNFOLLOW",
    payload: userId,
})