import Image from "next/image"
import { useState, useEffect } from "react"
import {useStore} from "../../context/store"

const SideMenu = ({ menu }: any) => {
  const {sideMenu, setSideMenu} = useStore()
  const [urlImg, setUrlImg] = useState<string>("")

  useEffect(() => {
    // setUrlImg("")
    setUrlImg("/img/pic-risma.jpg")
  }, [])

  const handleSideMenu = () => {
    setSideMenu(!sideMenu)
  }

  console.log('menuSide=====>', menu)
  return (
    <>
    <button onClick={handleSideMenu}>
      <div className={`w-screen h-screen absolute top-0 bg-black opacity-40 cursor-default ${menu ? "block" : "hidden"}`}></div>
    </button>
    <div className={`sm:hidden w-8/12 h-screen bg-secondary fixed top-0 right-0 ${menu ? "block transition duration-1000 opacity-100" : "transition duration-1000 translate-x-full opacity-0"}`}>
      <div className="w-11/12 h-5/6 border-2 border-white mx-auto mt-14 rounded-lg relative">
        <div className="w-20 h-20 mx-auto rounded-full mt-3 relative border-2 border-white bg-cover overflow-hidden bg-primary">
          <Image src={(urlImg) || "/img/pic-icon.svg"} alt="pic-icon" fill={true} />
        </div>
      <p className="text-sm italic text-center mx-auto w-fit cursor-pointe hover:font-semibold cursor-pointer mt-3">Risma Lusiana</p>
      <p className="bottom-2 inset-x-1/3 absolute text-xs italic text-center mx-auto w-fit cursor-pointer text-blue-500 hover:text-blue-600 hover:font-semibold">Logout</p>
      </div>
    </div>
    </>
  )
}

export default SideMenu