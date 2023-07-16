"use client"
import React, { useEffect, useRef, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import SampleNotes from "./components/templates/SampleNotes"
import Button from "./components/elements/Button"
import InputLabel from "./components/elements/InputLabel"
import Nav from "./components/elements/Nav"
import NavLogo from "./components/fragments/NavLogo"
import NavBrand from "./components/fragments/NavBrand"
import Alert from "./components/fragments/Alert"
import {useStore} from "./context/store"

const Home = () => {
  const {state, dispatch} = useStore()

  const [sampleNotes, setSampleNotes] = useState<string>('');
  const focusInput = useRef<HTMLInputElement>(null);

  //================>
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    console.log("url===>", url)
    // You can now use the current URL
    // ...
  }, [pathname, searchParams])
  //========================<

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
      {/* <Alert validation={state.alert} message={state.message} routes={state.routes} /> */}
      <div className="w-9/12 py-5 mx-auto mt-3 bg-green-100 rounded-lg sm:w-1/3 sm:mt-5">
        <div className="pt-3 text-lg italic font-semibold text-center">
          <h1>Welcome to NotesApp</h1>
          <div className="relative w-32 h-32 mx-auto my-5">
            <Image src="/img/logo.ico" alt="logo" fill={true} />
          </div>
          <div className="w-9/12 mx-auto sm:w-1/3">
            <InputLabel inputRef={focusInput} placeholder="catatan hari ini.." onChange={handleChange} onKeyDown={handleKeyDown} className="mb-2 text-xs italic" />
          </div>
          <div className="flex flex-roe justify-evenly">
            <Link href="/login">
              <Button>Log in</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign up</Button>
            </Link>
          </div>
        </div>
      </div>
      <SampleNotes body={sampleNotes} className={`${sampleNotes.length > 0 ? 'block' : 'hidden'}`}/>
    </>
  )
}

export default Home