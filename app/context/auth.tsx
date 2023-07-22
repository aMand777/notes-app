"use client"
import { useReducer, useContext, createContext } from "react";
import { login, updateSession, logout } from "../services/auth-service"
import { useRouter } from "next/navigation"
import { useStore } from "./store"

const InitialAuthState = {
  message: "",
  loading: false,
};

const AuthActions = {
  SET_LOADING: 'SET_LOADING',
  SET_LOGIN_SUCCESS: 'SET_LOGIN_SUCCESS',
  SET_LOGIN_FAILED: 'SET_LOGIN_FAILED',
  SET_LOGOUT: 'SET_LOGOUT',
};


const AuthReducer = (state: any, action: any) => {
  switch (action.type) {
    case AuthActions.SET_LOADING:
      return { ...state, loading: true };
    case AuthActions.SET_LOGIN_SUCCESS:
      return {
        loading: false,
      };
    case AuthActions.SET_LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
      default:
      case AuthActions.SET_LOGOUT:
        return InitialAuthState;
  }
};

export const Authentications = createContext<any>(null)
export const useAuth = () => useContext(Authentications)

const AuthProvider = ({ children }: any) => {
  const { dispatch } = useStore()
  const router = useRouter()
  const [authState, authDispatch] = useReducer(AuthReducer, InitialAuthState);

  const Login = (user: {email : string, password: string}) => {
    authDispatch({ type: AuthActions.SET_LOADING })

    login(user, (res: any) => {
      if (res.status === "success") {
        router.replace("/dashboard")
        authDispatch({ type: AuthActions.SET_LOGIN_SUCCESS })
      } else if (res.status === 400 || res.status === 401) {
        authDispatch({ type: AuthActions.SET_LOGIN_FAILED, payload: res.data.message })
      }
      console.log(res)
    })
  }

  const UpdateSession = () => {

    dispatch({ type: AuthActions.SET_LOADING })
    updateSession((res: any) => {
      if (res.status === "success") {
        router.push("/dashboard")
        dispatch({ type: "SET_UPDATE_SESSION_SUCCESS" })
      } else if (res.status === 400) {
        dispatch({ type: "SET_UPDATE_SESSION_FAILED" })
      } else {
        console.log(res)
      }
    })
  }

  const Logout = () => {
    authDispatch({ type: AuthActions.SET_LOADING })

    logout((res: any) => {
        authDispatch({ type: AuthActions.SET_LOGOUT })
        router.replace("/login")
      console.log(res)
    })
  }

  return <Authentications.Provider value= { { authState, authDispatch, Login, UpdateSession, Logout } }> { children } </Authentications.Provider>
}

export default AuthProvider;
