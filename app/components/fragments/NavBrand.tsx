import Link from "next/link"

type Props = {
  link: string;
}

const NavBrand = ({ link }: Props) => {
  return (
    <div className="w-1/3">
      <h1 className="font-bold italic text-2xl w-fit mx-auto">
        <Link href={link}>NotesApp</Link>
      </h1>
    </div>
  )
}

export default NavBrand