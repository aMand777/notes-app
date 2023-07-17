"use client"
import Image from "next/image"
import { useState, useEffect, useMemo } from "react"
import {useStore} from "../../context/store"
import { useAuth } from "../../context/auth"
import SessionAlert from "../fragments/SessionAlert"
import { useUsers } from "@/app/context/users"

const NavUsers = () => {
  const {GetUserById} = useUsers()
  const {Logout} = useAuth()
  const [urlImg, setUrlImg] = useState<string>("")
  const [user, setUser] = useState<string>("")
  const { sideMenu, setSideMenu, state } = useStore()
  
  const handleSideMenu = () => {
    setSideMenu(!sideMenu)
  }
  
  const handleLogout = () => {
    Logout()
  }
  
  useEffect(() => {
    GetUserById((data: any) => {
      setUser(data);
    });

    setUrlImg("")
    // setUrlImg("/img/pic-risma.jpg")
  }, [])

  const time = new Date().getHours();
  const greeting = time < 12 ? 'pagi' : time < 15 ? 'siang' : time < 18 ? 'sore' : 'malam';

  return (
    <>
    <SessionAlert validation={ state.alertSession } message={ state.message } />
    <div className="flex justify-end w-1/3 sm:hidden">
    <button onClick={handleSideMenu} className="mr-5">
      <Image src="/img/menu-icon.png" alt="menu-icon" width="20" height="20" className={`cursor-pointer md:hidden ${sideMenu ? "hidden" : "block"}`} />
      <Image src="/img/close-icon.png" alt="close-icon" width="15" height="15" className={`cursor-pointer md:hidden ${sideMenu ? "block" : "hidden"}`} />
    </button>
    </div>
    <div className="items-center justify-around hidden w-1/3 sm:flex bg-slate-30">
      <div className="flex-auto">
        <p className="ml-auto text-xs font-medium cursor-pointer w-fit">
          <span className="hidden mr-1 text-xs italic font-thin md:inline-block cursor-text">{`Selamat ${greeting},`}</span>
          {user}
        </p>
        </div>
        <div className="relative ml-2 overflow-hidden bg-cover rounded-full w-7 h-7 bg-secondary">
          <Image src={(urlImg) || "/img/pic-icon.svg"} alt="pic-icon" fill={true} />
        </div>
      <span className="mx-1 lg:w-1/5">
        <button onClick={handleLogout}>
          <p className="mx-auto text-xs italic text-center text-blue-500 cursor-pointer w-fit hover:text-blue-600 hover:font-semibold active:cursor-wait">Logout</p>
        </button>
      </span>
    </div>
    </>
  )
}

export default NavUsers