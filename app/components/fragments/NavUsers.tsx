"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import {useStore} from "../../context/store"
import { logout } from "../../services/auth-service"
import { useRouter } from "next/navigation"

const NavUsers = () => {
  const router = useRouter()
  const [urlImg, setUrlImg] = useState<string>("")
  const { sideMenu, setSideMenu, setLoading } = useStore()
  
  const handleSideMenu = () => {
    setSideMenu(!sideMenu)
  }
  
  const handleLogout = () => {
    setLoading(true)
    logout((res: any) => {
      if (res.status === "success") {
        setLoading(false)
        router.replace("/login")
      } else if (res.status === 400) {
        setLoading(false)
      } else
      console.log(res)
    })
  }

  useEffect(() => {
    setUrlImg("")
    // setUrlImg("/img/pic-risma.jpg")
  }, [])

  const time = new Date().getHours();
  const greeting = time < 12 ? 'pagi' : time < 15 ? 'siang' : time < 18 ? 'sore' : 'malam';

  return (
    <>
    <div className="sm:hidden w-1/3 flex justify-end">
    <button onClick={handleSideMenu} className="mr-5">
      <Image src="/img/menu-icon.png" alt="menu-icon" width="20" height="20" className={`cursor-pointer md:hidden ${sideMenu ? "hidden" : "block"}`} />
      <Image src="/img/close-icon.png" alt="close-icon" width="15" height="15" className={`cursor-pointer md:hidden ${sideMenu ? "block" : "hidden"}`} />
    </button>
    </div>
    <div className="sm:flex justify-around w-1/3 hidden bg-slate-30 items-center">
      <div className="flex-auto">
        <p className="w-fit text-xs font-medium ml-auto cursor-pointer">
          <span className="hidden md:inline-block text-xs font-thin italic cursor-text mr-1">{`Selamat ${greeting},`}</span>
          Risma Lusiana
        </p>
        </div>
        <div className="w-7 h-7 rounded-full ml-2 bg-cover overflow-hidden relative bg-secondary">
          <Image src={(urlImg) || "/img/pic-icon.svg"} alt="pic-icon" fill={true} />
        </div>
      <span className="lg:w-1/5 mx-1">
        <button onClick={handleLogout}>
          <p className="text-xs italic text-center mx-auto w-fit cursor-pointer text-blue-500 hover:text-blue-600 hover:font-semibold active:cursor-wait">Logout</p>
        </button>
      </span>
    </div>
    </>
  )
}

export default NavUsers