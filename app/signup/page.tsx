"use client"
import SignupForm from "../components/templates/SignupForm"
import Loading from "../components/fragments/Loading"
import Alert from "../components/fragments/Alert"
import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

const Signup = () => {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [alert, setAlert] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("")
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
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/users`, user)
      .then((response) => {
        // console.log('response', response)
        setMessage(response.data.status)
        setAlert(true)
        // router.push("/login")
      })
      .catch((error) => {
        console.log(error.response);
        setLoading(false)
        setMessage(error.response.data.message)
      })
  }

  const routes = () => {
    router.replace("/login")
  }

  // console.log('message===>', message)
  
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