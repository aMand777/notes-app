import axios from "axios";
import Cookies from "js-cookie"

export const login = (user: object, res: any) => {
  axios.post(`${process.env.NEXT_PUBLIC_API_URL}/authentications`, user)
    .then((response) => {
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
    })
    .catch((error) => {
      res(error.response)
      console.log(error)
  })
}