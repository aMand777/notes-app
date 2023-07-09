import Image from "next/image"

const NavLogo = () => {
  return (
    <div className="w-1/3 ">
        <Image src="/img/logo.ico" alt="logo" width="30" height="20" className="relative left-1/4 origin-top-right duration-500 delay-300 hover:-rotate-12"/>
    </div>
  )
}

export default NavLogo