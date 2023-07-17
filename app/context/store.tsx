"use client"
import { createContext, useContext, useState, useReducer, useEffect } from 'react';

const InitialState = {
  alert: false,
  alertSession: false,
  confirmAlert: false,
  confirm: false,
  loading: false,
  message: "",
  routes: "",
}

const AlertReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_ALERT":
      return { ...state, alert: true, };
    case "SET_ALERT_SESSION":
      return { ...state, alertSession: true, };
    case "SET_CONFIRM_ALERT":
      return { ...state, confirmAlert: true, };
    case "SET_CONFIRM":
      return { ...state, confirm: true, };
    case "SET_LOADING":
      return { ...state, loading: true, };
    case "SET_ROUTES":
      return { ...state, routes: action.payload, };
    case "SET_MESSAGE":
      return { ...state, message: action.payload, };
    case "SET_UPDATE_SESSION_SUCCESS" :
      return {
        ...state,
        loading: false,
        alertSession: false,
      };
    case "SET_UPDATE_SESSION_FAILED" :
      return {
        ...state,
        loading: false,
        alertSession: false,
        alert: true,
        routes: "/login",
        message: "Gagal memperbarui sesi, silakan login kembali",
      };
    case "SET_DEFAULT":
      return InitialState;
    default:
      break;
  }
}

export const Store = createContext<any>(null);
export const useStore = () => useContext(Store);


export const StoreProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AlertReducer, InitialState)
  const [sideMenu, setSideMenu] = useState<boolean>(false)

  return <Store.Provider value={{ state, dispatch, sideMenu, setSideMenu }}>{children}</Store.Provider>;
};

export default StoreProvider;