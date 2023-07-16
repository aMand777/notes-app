import Image from "next/image"
import { useState, useEffect } from "react"
import {useStore} from "../../context/store"
import {useAuth} from "../../context/auth"
import {useUsers} from "../../context/users"

const SideMenu = ({ menu }: any) => {
  const { Logout } = useAuth()
  const { GetUserById } = useUsers()
  const { sideMenu, setSideMenu } = useStore()
  const [urlImg, setUrlImg] = useState<string>("")
  const [user, setUser] = useState<string>("")

  useEffect(() => {
    GetUserById((data: any) => {
      setUser(data)
    })
    setUrlImg("")
    // setUrlImg("/img/pic-risma.jpg")
  }, [])

  const handleSideMenu = () => {
    setSideMenu(!sideMenu)
  }

  const handleLogout = () => {
    Logout()
    setSideMenu(!sideMenu)
  }


  return (
    <>
    <button onClick={handleSideMenu}>
      <div className={`w-screen h-screen fixed top-0 bg-black opacity-40 cursor-default ${menu ? "block" : "hidden"}`}></div>
    </button>
    <div className={`sm:hidden w-8/12 h-screen bg-secondary fixed top-0 right-0 ${menu ? "block transition duration-1000 opacity-100" : "transition duration-1000 translate-x-full opacity-0"}`}>
      <div className="relative w-11/12 mx-auto border-2 border-white rounded-lg h-5/6 mt-14">
        <div className="relative w-20 h-20 mx-auto mt-3 overflow-hidden bg-cover border-2 border-white rounded-full bg-primary">
          <Image src={(urlImg) || "/img/pic-icon.svg"} alt="pic-icon" fill={true} />
        </div>
          <p className="mx-auto mt-3 text-sm italic text-center cursor-pointer w-fit cursor-pointe hover:font-semibold">{user}</p>
          <button onClick={handleLogout}>
            <p className="absolute mx-auto text-xs italic text-center text-blue-500 cursor-pointer bottom-2 inset-x-1/3 w-fit hover:text-blue-600 hover:font-semibold">Logout</p>
          </button>
      </div>
    </div>
    </>
  )
}

export default SideMenu