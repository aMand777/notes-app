"use client"
import SideMenu from "../fragments/SideMenu";
import { useStore } from "../../context/store"
import SessionAlert from "../fragments/SessionAlert"
import Alert from "../fragments/Alert"
import ConfirmAlert from "../fragments/ConfirmAlert"

const Nav = ({ children }: {children: React.ReactNode}) => {
  const {sideMenu, alertSession, message, alert, confirmAlert} = useStore()

  return (
    <>
      <nav className={`w-screen h-10 flex items-center bg-primary sticky top-0 left-0 z-50`}>
      {children}
      </nav>
      <SideMenu menu={sideMenu} />
      <Alert validation={alert} message={message} />
      <SessionAlert validation={alertSession} message={message} />
      <ConfirmAlert validation={confirmAlert} message={"Are you sure ?"}/>
    </>
  );
};

export default Nav;
