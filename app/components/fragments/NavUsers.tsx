"use client"
import Image from "next/image"
import {useStore} from "../../context/store"

const NavUsers = () => {
  const { sideMenu, setSideMenu } = useStore()
  
  const handleClick = () => {
    setSideMenu(!sideMenu)
  }
  console.log('sideMenu===>', sideMenu)

  const time = new Date().getHours();
  const greeting = time < 12 ? 'pagi' : time < 15 ? 'siang' : time < 18 ? 'sore' : 'malam';

  return (
    <>
    <div className="sm:hidden w-1/3 flex justify-end">
    <button onClick={handleClick} className="mr-5">
      <Image src="/img/menu-icon.png" alt="menu-icon" width="20" height="20" className={`cursor-pointer md:hidden ${sideMenu ? "hidden" : "block"}`} />
      <Image src="/img/close-icon.png" alt="close-icon" width="15" height="15" className={`cursor-pointer md:hidden ${sideMenu ? "block" : "hidden"}`} />
    </button>
    </div>
    <div className="sm:flex justify-around w-1/3 hidden">
      <div className="flex-auto">
        <p className="w-fit text-xs font-medium ml-auto cursor-pointer">
          <span className="hidden md:inline-block text-xs font-thin italic cursor-text mr-1">{`Selamat ${greeting},`}</span>
          Risma Lusiana
        </p>
      </div>
      <span className="flex-aut w-1/4 lg:w-1/5">
        <p className="text-xs italic text-center mx-auto w-fit cursor-pointer text-blue-500 hover:text-blue-600 hover:font-semibold">Logout</p>
      </span>
    </div>
    </>
  )
}

export default NavUsers