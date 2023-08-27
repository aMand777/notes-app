"use client"
import { useRouter } from "next/navigation"

const NavBrand = () => {
  const router = useRouter()

  const handleClick = () => {
    router.replace('/dashboard')
  }

  return (
    <div className="w-1/3">
      <h1 className="font-bold italic text-2xl w-fit mx-auto">
      <button onClick={handleClick}>
        NotesApp
      </button>
      </h1>
    </div>
  )
}

export default NavBrand