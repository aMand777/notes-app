'use client';
import InputLabel from '../elements/InputLabel';
import { useState, useEffect, useRef } from 'react';
import Checkbox from '../elements/Checkbox';
import Button from '../elements/Button';
import Link from 'next/link';

const SignupForm = ({ isError, ...rest }: any) => {
  const focusInput = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleCheckboxChange = (event: any) => {
    setIsChecked(event.target.checked);
  };

  useEffect(() => {
    if (focusInput.current) {
      focusInput.current.focus();
    }
  }, []);

  return (
    <div className="w-10/12 pb-5 mx-auto mt-5">
      <InputLabel
        {...rest}
        errorMessage={isError && isError.includes('username') ? isError : ''}
        inputRef={focusInput}
        htmlFor="username"
        id="username"
        type="text"
        name="username"
        placeholder="input your name"
        className={`bg-slate-100 ${isError && isError.includes('name') ? 'border' : 'border-0'}`}>
        Name
      </InputLabel>
      <InputLabel
        {...rest}
        errorMessage={isError && isError.includes('email') ? isError : ''}
        htmlFor="email"
        id="email"
        type="email"
        name="email"
        placeholder="input your email"
        className={`bg-slate-100 ${isError && isError.includes('email') ? 'border' : 'border-0'}`}>
        Email
      </InputLabel>
      <InputLabel
        {...rest}
        errorMessage={isError && isError.includes('password') ? isError : ''}
        htmlFor="password"
        id="password"
        type={!isChecked ? 'password' : 'text'}
        name="password"
        placeholder="input your password"
        className={`bg-slate-100 ${isError && isError.includes('password') ? 'border' : 'border-0'}`}>
        Password
      </InputLabel>
      <InputLabel
        {...rest}
        errorMessage={isError && isError.includes('confirmPassword') ? isError : ''}
        htmlFor="repeatPassword"
        id="repeatPassword"
        type={!isChecked ? 'password' : 'text'}
        name="confirmPassword"
        placeholder="repeat password"
        className={`bg-slate-100 ${isError && isError.includes('confirmPassword') ? 'border' : 'border-0'}`}>
        Confirm Password
      </InputLabel>
      <Checkbox className="my-3" checked={isChecked} onChange={handleCheckboxChange}>
        Show password
      </Checkbox>
      <div className="flex justify-between">
        <Link href="/login">
          <span className="text-sm italic font-semibold text-blue-500 cursor-pointer hover:text-blue-800">Login</span>
        </Link>
        <Button className="flex justify-end">Signup</Button>
      </div>
    </div>
  );
};

export default SignupForm;
