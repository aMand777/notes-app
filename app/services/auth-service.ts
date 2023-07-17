import axios from "axios";
import Cookies from "js-cookie"
import jwt from "jsonwebtoken"

export const login = (user: {email: string, password: string}, res: any) => {
  axios.post(`${process.env.NEXT_PUBLIC_API_URL}/authentications`, user)
    .then((response) => {
      const payload: any = jwt.decode(response.data.data.accessToken)
      const {id}: any = payload
      Cookies.set("userId", id)
      Cookies.set("accessToken", response.data.data.accessToken);
      Cookies.set("refreshToken", response.data.data.refreshToken);
      res(response.data)
    })
    .catch((error) => {
      res(error.response)
  })
}

export const updateSession = (res: any) => {
  const refreshToken = Cookies.get("refreshToken")
  axios.put(`${process.env.NEXT_PUBLIC_API_URL}/authentications`, {refreshToken} )
    .then((response) => {
      Cookies.set("accessToken", response.data.data.accessToken)
      res(response.data)
    })
    .catch((error) => {
      res(error.response)
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
  })
}

export const logout = (res: any) => {
  const refreshToken = Cookies.get("refreshToken")

  const logoutSession = {
    refreshToken
  };

  axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/authentications`, {data: logoutSession})
    .then((response) => {
      res(response.data)
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
      Cookies.remove("userId");
    })
    .catch((error) => {
      if (error.response.status === 400) {
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
      }
      res(error.response)
      console.log(error)
  })
}