"use client";
import LoginForm from "../components/templates/LoginForm";
import Loading from "../components/fragments/Loading"
// import Alert from "../components/fragments/Alert"
import { useState } from "react";
import axios from "axios"
import { useRouter } from "next/navigation"
// import LoadingSpin from '../components/templates/LoadingSpin';

const Login = () => {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  // const [alert, setAlert] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("")
  const [user, setUser] = useState<object>({
    email: '',
    password: '',
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setLoading(true)
    axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/authentications`, user)
    .then((response) => {
      console.log('response', response)
      router.replace("/notes")
    })
    .catch((error) => {
      console.log(error.response);
      setLoading(false)
      setMessage(error.response.data.message)
    })
}

// console.log('message===>', message)

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

export default Login;
