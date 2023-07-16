"use client"
import SignupForm from "../components/templates/SignupForm"
import Loading from "../components/fragments/Loading"
import Alert from "../components/fragments/Alert"
import { useState } from "react"
import { insertUser } from "../services/users-service"
import { useUsers } from "../context/users"
import { useRouter } from "next/navigation"
import {useStore} from "../context/store"

const SignupPage = () => {
  const { InsertUser, usersState } = useUsers()
  const router = useRouter()
  const { state } = useStore()
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
      <Alert validation={state.alert} routes={usersState.routes} message={`${usersState.message}, please login`} />
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