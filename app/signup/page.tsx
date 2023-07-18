"use client"
import SignupForm from "../components/templates/SignupForm"
import Loading from "../components/fragments/Loading"
import { useState } from "react"
import { useUsers } from "../context/users"

const SignupPage = () => {
  const { InsertUser, usersState } = useUsers()
  const [user, setUser] = useState<object>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  
  const handleSubmit = (event: any) => {
    event.preventDefault()
    InsertUser(user)
  }

  return (
    <>
      <Loading validation={usersState.loading} />
      <div className="w-9/12 mx-auto my-auto mt-24 bg-green-100 rounded-lg h-fit sm:w-1/3 sm:h-5/6">
        <h1 className="pt-3 text-lg italic font-semibold text-center">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <SignupForm onChange={handleChange} isError={usersState.message} />
        </form>
      </div>
    </>
  )
}

export default SignupPage