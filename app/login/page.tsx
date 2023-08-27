"use client"
import LoginForm from "../components/templates/LoginForm"
import Loading from "../components/fragments/Loading"
import { useState } from "react"
import { useAuth } from "../context/auth"

const LoginPage = () => {
  const { Login, authState } = useAuth()
  const [user, setUser] = useState<object>({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    Login(user)
}

  return (
    <>
      <Loading validation={authState.loading} />
      <div className="w-9/12 md:w-5/12 mx-auto my-auto mt-24 bg-green-100 rounded-lg h-fit sm:w-1/3 sm:h-5/6 max-w-md">
        <h1 className="pt-3 text-lg italic font-semibold text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <LoginForm onChange={handleChange} isError={authState.message} />
        </form>
      </div>
    </>
  );
};

export default LoginPage;
