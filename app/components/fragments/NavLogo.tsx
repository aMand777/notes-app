import Image from "next/image"
import Link from "next/link"

const NavLogo = ({link}: any) => {
  return (
    <div className="w-1/3">
      <Link href={link}>
        <Image src="/img/logo.ico" alt="logo" priority={true} width="30" height="20" className="relative left-1/4 cursor-pointer origin-top-right duration-500 delay-300 hover:-rotate-12"/>
      </Link>
    </div>
  )
}

export default NavLogo