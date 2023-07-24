"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import SampleNotes from "./components/templates/SampleNotes"
import InputLabel from "./components/elements/InputLabel"
import Nav from "./components/elements/Nav"
import NavLogo from "./components/fragments/NavLogo"
import NavBrand from "./components/fragments/NavBrand"
import { useStore } from "./context/store"

const Home = () => {
  const { dispatch } = useStore()

  const [sampleNotes, setSampleNotes] = useState<string>('');
  const focusInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (focusInput.current) {
      focusInput.current.focus();
    }
  }, []);

  const handleChange = (event :any) => {
    setSampleNotes(event.target.value);
  };

  const handleKeyDown = (event: any) => {

    if (event.key === 'Enter') {
      dispatch({type: "SET_ALERT"})
      dispatch({type: "SET_ROUTES", payload: "/login"})
      dispatch({type: "SET_MESSAGE", payload: "Please Login"})
    }
  };

  return (
    <>
      <Nav>
        <NavLogo />
        <NavBrand link="/" />
      </Nav>
      <div className="w-9/12 py-2 mx-auto mt-3 bg-green-100 rounded-lg sm:w-1/3 max-w-sm sm:mt-5">
        <div className="text-sm sm:text-md italic font-semibold text-center">
          <h1>Welcome to NotesApp</h1>
          <div className="relative w-16 h-16 sm:w-32 sm:h-32 mx-auto my-5">
            <Image src="/img/logo.ico" alt="logo" fill={true} />
          </div>
          <div className="w-9/12 mx-auto">
            <InputLabel inputRef={focusInput} placeholder="catatan hari ini.." onChange={handleChange} onKeyDown={handleKeyDown} className="mb-2 text-xs italic" />
          </div>
          <div className="flex flex-row w-9/12 mx-auto justify-between">
            <Link href="/login">
              <p className="text-[10px] md:text-xs text-blue-500 italic hover:scale-110 hover:font-bold hover:text-blue-600 ">Login</p>
            </Link>
            <Link href="/signup">
            <p className="text-[10px] md:text-xs text-blue-500 italic hover:scale-110 hover:font-bold hover:text-blue-600">Signup</p>
            </Link>
          </div>
        </div>
      </div>
      <SampleNotes body={sampleNotes} className={`${sampleNotes.length > 0 ? 'block' : 'hidden'}`}/>
    </>
  )
}

export default Home