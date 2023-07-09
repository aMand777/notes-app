"use client"
import SideMenu from "../fragments/SideMenu";
import {useStore} from "../../context/store"

const Nav = ({ children }: {children: React.ReactNode}) => {
  const {sideMenu} = useStore()
  console.log('sideMenuNav===>', sideMenu)

  return (
    <>
      <nav className={`w-screen h-10 flex items-center bg-primary sticky top-0 left-0 z-50`}>
      {children}
      </nav>
    <SideMenu menu={sideMenu} />
    </>
  );
};

export default Nav;
