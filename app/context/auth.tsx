"use client"
import { useReducer, useContext, createContext } from "react";
import { login, updateSession, logout } from "../services/auth-service"
import { useRouter } from "next/navigation"
import { useStore } from "./store"

const InitialAuthState = {
  loading: false,
  message: ""
};

const AuthReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true };
    case "SET_LOGIN_SUCCESS":
      return { ...state, loading: false };
    case "SET_LOGIN_FAILED":
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
      default:
      case "SET_LOGOUT":
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
    authDispatch({ type: "SET_LOADING" })

    login(user, (res: any) => {
      if (res.status === "success") {
        authDispatch({ type: "SET_LOGIN_SUCCESS" })
        router.push("/dashboard")
      } else if (res.status === 400 || res.status === 401) {
        authDispatch({ type: "SET_LOGIN_FAILED", payload: res.data.message })
      }
    })
  }

  const UpdateSession = () => {

    dispatch({ type: "SET_LOADING" })
    updateSession((res: any) => {
      if (res.status === "success") {
        router.push("/dashboard")
        dispatch({ type: "SET_UPDATE_SESSION_SUCCESS" })
      } else if (res.status === 400) {
        dispatch({ type: "SET_UPDATE_SESSION_FAILED" })
      }
    })
  }

  const Logout = () => {
    authDispatch({ type: "SET_LOADING" })

    logout(() => {
        authDispatch({ type: "SET_LOGOUT" })
        router.replace("/login")
    })
  }

  return <Authentications.Provider value= { { authState, authDispatch, Login, UpdateSession, Logout } }> { children } </Authentications.Provider>
}

export default AuthProvider;
