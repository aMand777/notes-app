"use client"
import { insertUser, uploadImage } from "../services/users-service"; 
import { useReducer, useContext, createContext } from "react";
import { useStore } from "./store"
import Cookies from "js-cookie"

const InitialUsersState = {
  loading: false,
  message: ""
};

const UsersReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_LOADING" :
      return { ...state, loading: true };
    case "SET_INSERT_USERS_FAILED" :
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case "SET_DEFAULT" :
      return InitialUsersState;
    default:
      break;
  };
};

export const Users = createContext<any>(null)
export const useUsers = () => useContext(Users)

const UsersProvider = ({ children }: any) => {
  const { dispatch } = useStore()
  const [usersState, usersDispatch] = useReducer(UsersReducer, InitialUsersState);

  const InsertUser = (user: object) => {
    usersDispatch({ type: "SET_LOADING" })

    insertUser(user, (res: any) => {
      if (res.status === "success") {
        usersDispatch({ type: "SET_DEFAULT"})
        dispatch({type: "SET_ALERT"})
        dispatch({type: "SET_MESSAGE", payload: `${res.status}, please login`})
        dispatch({type: "SET_ROUTES", payload: "/login"})
      } else if (res.status === 400 || res.status === 401) {
        usersDispatch({ type: "SET_INSERT_USERS_FAILED", payload: res.data.message })
      } else {
        usersDispatch({ type: "SET_DEFAULT"})
        console.log(res)
      }
    })
  }

  const UploadImageUser = (file: any) => {
    const token = Cookies.get("accessToken")
    usersDispatch({ type: "SET_LOADING" })

    uploadImage(file, (res: any) => {
      if (res.status === "success") {
        console.log(res)
        usersDispatch({ type: "SET_DEFAULT"})
        dispatch({type: "SET_ALERT"})
        dispatch({type: "SET_MESSAGE", payload: `${res.status}`})
        dispatch({type: "SET_ROUTES", payload: "/dashboard"})
      } else if (res.status === 413) {
        dispatch({type: "SET_ALERT"})
        dispatch({type: "SET_MESSAGE", payload: "Ukuran file maksimal 100kb"})
      } else if (res.status === 401 || token === undefined) {
        console.log(res)
        dispatch({type: "SET_ALERT_SESSION"})
        dispatch({type: "SET_MESSAGE", payload: "Sesi kamu telah habis, tetap login ?"})
      } else {
        console.log(res)
      }
    })
  }

  return <Users.Provider value= { { usersState, usersDispatch, InsertUser, UploadImageUser} }> { children } </Users.Provider>
}

export default UsersProvider;
