import { USER_REGISTER_BEGIN, USER_REGISTER_FAILURE, USER_REGISTER_SUCCESS, USER_LOGIN_BEGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGOUT_BEGIN, USER_LOGOUT_FAILURE, USER_LOGOUT_SUCCESS } from "./Actions"


const Reducer = (state, action) => {
    if(action.type == USER_REGISTER_BEGIN) {
        return {
            ...state,
            isLoading: true,
        }
    }
    if(action.type == USER_REGISTER_SUCCESS) {
        return {
            ...state,
            isRegistered : true,
            isLoading: false,
        }
    }
    if(action.type == USER_REGISTER_FAILURE) {
        return {
            ...state,
            isRegistered : false,
            isLoading: false,
        }
    }

    if(action.type == USER_LOGIN_BEGIN) {
        return {
            ...state,
            isLoading: true,
        }
    }
    if(action.type == USER_LOGIN_SUCCESS) {
        return {
            ...state,
            isLogin : true,
            isLoading: false,
        }
    }
    if(action.type == USER_LOGIN_FAILURE) {
        return {
            ...state,
            isLogin : false,
            isLoading: false,
        }
    }

    if(action.type == USER_LOGOUT_BEGIN) {
        return {
            ...state,
            isLoading: true,
        }
    }
    if(action.type == USER_LOGOUT_SUCCESS) {
        return {
            ...state,
            isLogin : false,
            isLoading: false,
        }
    }
    if(action.type == USER_LOGOUT_FAILURE) {
        return {
            ...state,
            isLogin : true,
            isLoading: false,
        }
    }

    throw new Error (`no such action :${action.type}`)
}

export default Reducer;