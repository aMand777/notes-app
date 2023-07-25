"use client"
import SideMenu from "../fragments/SideMenu";
import { useStore } from "../../context/store"
import Alert from "../fragments/Alert"
import ConfirmAlert from "../fragments/ConfirmAlert"

const Nav = ({ children }: {children: React.ReactNode}) => {
  const {sideMenu, state} = useStore()

  return (
    <>
      <nav className={`w-screen h-10 flex items-center bg-primary sticky top-0 left-0 z-50`}>
      {children}
      </nav>
      <SideMenu menu={sideMenu} />
      <ConfirmAlert validation={state.confirmAlert} />
    </>
  );
};

export default Nav;
