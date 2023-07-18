"use client"
import { insertUser, getUserById } from "../services/users-service"; 
import { useReducer, useContext, createContext, useState } from "react";
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

  const GetUserById = (data: any) => {

    const id: any = Cookies.get("userId")

    getUserById(id, (res: any) => {
      if (res.status === "success") {
        data(res.data.user.username)
      } else {
        console.log(res)
      }
    })
  }

  return <Users.Provider value= { { usersState, usersDispatch, InsertUser, GetUserById} }> { children } </Users.Provider>
}

export default UsersProvider;
