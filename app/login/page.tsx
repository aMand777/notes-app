"use client";
import LoginForm from "../components/templates/LoginForm";
import Loading from "../components/fragments/Loading"
import { useState } from "react";
import {login} from "../services/auth-service"
import { useRouter } from "next/navigation"
import {useStore} from "../context/store"

const LoginPage = () => {
  const { loading, setLoading, message, setMessage} = useStore()
  const router = useRouter()
  const [user, setUser] = useState<object>({
    email: "",
    password: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event: any) => {
    setLoading(true)
    event.preventDefault();
    login(user, (res: any) => {
      if (res.status === "success") {
        router.replace("/dashboard")
        setLoading(false)
      } else if (res.status === 400 || res.status === 401) {
        setMessage(res.data.message)
        setLoading(false)
      }
      console.log(res)
    })
}


  return (
    <>
      <Loading validation={loading} message={"Please Wait"} />
      {/* <Alert validation={alert} routes={() => setAlert(false)} message={message} /> */}
      <div className="w-9/12 h-fit sm:w-1/3 sm:h-5/6 mx-auto bg-green-100 rounded-lg mt-24 my-auto">
        <h1 className="text-lg text-center font-semibold italic pt-3">Login</h1>
        <form onSubmit={handleSubmit}>
          <LoginForm onChange={handleChange} isError={message} />
        </form>
      </div>
    </>
  );
};

export default LoginPage;
