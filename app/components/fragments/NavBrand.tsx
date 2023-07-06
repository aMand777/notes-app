import Link from "next/link"

const NavBrand = ({link}: any) => {
  return (
    <div className="w-1/3">
      <Link href={link}>
      <h1 className="font-bold italic text-2xl cursor-pointer w-fit mx-auto">NotesApp</h1>
      </Link>
    </div>
  )
}

export default NavBrand