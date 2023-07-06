'use client';
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"
import Image from "next/image"
import SampleNotes from "./components/templates/SampleNotes"
import Button from "./components/elements/Button";
import InputLabel from "./components/elements/InputLabel"
import Nav from "./components/elements/Nav";
import NavLogo from "./components/fragments/NavLogo";
import NavBrand from "./components/fragments/NavBrand";
import Alert from "./components/fragments/Alert"

const Home = () => {
  const router = useRouter();

  const [sampleNotes, setSampleNotes] = useState<string>('');
  const [alert, setAlert] = useState<boolean>(false);
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
      setAlert(true)
    }
  };

  const route = () => {
    router.replace('/login')
  }

  return (
    <>
      <Nav>
        <NavLogo link="/" />
        <NavBrand link="/" />
      </Nav>
      <Alert validation={alert} routes={route} message={"Please Login"} />
      <div className="w-9/12 sm:w-1/3 mx-auto bg-green-100 rounded-lg sm:mt-5 mt-3 py-5">
        <div className="text-lg text-center font-semibold italic pt-3">
          <h1>Welcome to NotedPak</h1>
          <div className="w-32 h-32 mx-auto relative my-5">
            <Image src="/img/logo.ico" alt="logo" fill={true} />
          </div>
          <div className="w-9/12 sm:w-1/3 mx-auto">
            <InputLabel inputRef={focusInput} placeholder="catatan hari ini.." onChange={handleChange} onKeyDown={handleKeyDown} className="text-xs italic mb-2" />
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