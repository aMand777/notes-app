"use client"
// import Cookies from "js-cookie"
import { createContext, useContext, useState } from 'react';

export const Store = createContext<any>(false);
export const useStore = () => useContext(Store);


export const StoreProvider = ({ children }: any) => {
  // const accessToken = Cookies.get("accessToken")

  const [sideMenu, setSideMenu] = useState<boolean>(false)
  const [alertSession, setAlertSession] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [alert, setAlert] = useState<boolean>(false)
  const [confirmAlert, setConfirmAlert] = useState<boolean>(false)
  const [confirm, setConfirm] = useState<boolean>(false)
  const [routes, setRoutes] = useState<string>("")

  // console.log('loadingStore===>', loading)
  // console.log('tokenStore===>', accessToken)
  // console.log('alertSession===>', alertSession)
  // console.log('alert===>', alert)
  // console.log('confirm===>', confirm)

  return <Store.Provider value={{
    sideMenu, setSideMenu, alertSession, setAlertSession, message, setMessage, loading, setLoading, alert, setAlert, routes, setRoutes, confirmAlert, setConfirmAlert, confirm, setConfirm
  }}>{children}</Store.Provider>;
};

export default StoreProvider;