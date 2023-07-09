"use client"
import { createContext, useContext, useState } from 'react';

export const Store = createContext<any>(false);
export const useStore = () => useContext(Store);

export const StoreProvider = ({ children }: any) => {
  const [sideMenu, setSideMenu] = useState<boolean>(false)
  console.log("sideMenu===>", sideMenu)

  return  <Store.Provider value={ {sideMenu, setSideMenu} }>{ children }</Store.Provider>;
};

export default StoreProvider;