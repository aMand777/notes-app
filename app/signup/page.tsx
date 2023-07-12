"use client"
import SignupForm from "../components/templates/SignupForm"
import Loading from "../components/fragments/Loading"
import Alert from "../components/fragments/Alert"
import { useState } from "react"
import {insertUser} from "../services/user-service"
import { useRouter } from "next/navigation"
import {useStore} from "../context/store"

const Signup = () => {
  const router = useRouter()
  const { loading, setLoading, alert, setAlert, message, setMessage } = useStore()
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
    setLoading(true)
    event.preventDefault()
    insertUser(user, (res: any) => {
      if (res.status === "success") {
        setLoading(false)
        setMessage(res.status)
        setAlert(true)
      } else if (res.status === 400 || res.status === 401) {
        setMessage(res.data.message)
        setLoading(false)
      }
      console.log(res)
    })
  }

  const routes = () => {
    router.replace("/login")
  }

  return (
    <>
      <Loading validation={loading} message={"Please Wait"} />
      <Alert validation={alert} routes={routes} message={`${message}, please login`} />
      <div className="w-9/12 mx-auto my-auto mt-24 bg-green-100 rounded-lg h-fit sm:w-1/3 sm:h-5/6">
        <h1 className="pt-3 text-lg italic font-semibold text-center">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <SignupForm onChange={handleChange} isError={message} />
        </form>
      </div>
    </>
  )
}

export default Signup