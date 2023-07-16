"use client"
import { insertUser, getUserById } from "../services/users-service"; 
import { useReducer, useContext, createContext, useState } from "react";
import { useRouter } from "next/navigation"
import { useStore } from "./store"
import jwt from "jsonwebtoken"
import Cookies from "js-cookie"

const InitialUsersState = {
  alert: false,
  alertSession: false,
  loading: false,
  message: "",
  routes: "",
  user: {},
};

const UsersActions = {
  SET_LOADING: 'SET_LOADING',
  SET_INSERT_USERS_SUCCESS: 'SET_INSERT_USERS_SUCCESS',
  SET_INSERT_USERS_FAILED: 'SET_INSERT_USERS_FAILED',
  SET_GET_USERS_SUCCESS: 'SET_GET_USERS_SUCCESS',
  SET_GET_USERS_FAILED: 'SET_GET_USERS_FAILED',
  SET_GET_USER_BT_ID_SUCCESS: 'SET_GET_USER_BT_ID_SUCCESS',
  SET_GET_USER_BT_ID_FAILED: 'SET_GET_USER_BT_ID_FAILED',
  SET_DEFAULT: 'SET_DEFAULT',
};


const UsersReducer = (state: any, action: any) => {
  switch (action.type) {
    case UsersActions.SET_LOADING:
      return { ...state, loading: true };
    case UsersActions.SET_INSERT_USERS_SUCCESS:
      return {
        loading: false,
        message: action.payload,
        routes: "/login",
      };
    case UsersActions.SET_INSERT_USERS_FAILED:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case UsersActions.SET_GET_USER_BT_ID_SUCCESS :
      return {
        ...state,
        user: action.payload
      };
    case UsersActions.SET_DEFAULT:
      return InitialUsersState;
    default:
      break;
  };
};

export const Users = createContext<any>(null)
export const useUsers = () => useContext(Users)

const UsersProvider = ({ children }: any) => {
  // const [user, setUser] = useState<any>(null)
  const {state, dispatch, user} = useStore()
  const router = useRouter()
  const [usersState, usersDispatch] = useReducer(UsersReducer, InitialUsersState);

  const InsertUser = (user: object) => {

    usersDispatch({ type: UsersActions.SET_LOADING })
    insertUser(user, (res: any) => {
      if (res.status === "success") {
        usersDispatch({
          type: UsersActions.SET_INSERT_USERS_SUCCESS,
          payload: res.status
        })
        dispatch({type: "SET_ALERT"})
      } else if (res.status === 400 || res.status === 401) {
        usersDispatch({
          type: UsersActions.SET_INSERT_USERS_FAILED,
          payload: res.data.message
        })
      }
      console.log(res)
    })
  }

  const GetUserById = (data: any) => {
    
    // const token = Cookies.get("accessToken")
    // const decoded: string | jwt.JwtPayload | null = jwt.decode(`${token}`)
    // if (decoded !== null) {
    //   setUser(decoded)
    //   console.log(decoded);
    // } else {
    //   console.error('Token is not valid or has expired.');
    // }

    getUserById(user.id, (res: any) => {
      if (res.status === "success") {
        console.log(res)
        data(res.data.user.username)
        usersDispatch({
          type: UsersActions.SET_GET_USER_BT_ID_SUCCESS,
          payload: res.data.user
        })
      } else {
        console.log(res)
      }
    })
  }

  return <Users.Provider value= { { usersState, usersDispatch, InsertUser, GetUserById} }> { children } </Users.Provider>
}

export default UsersProvider;
