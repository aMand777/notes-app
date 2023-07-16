import axios from "axios"
import Cookies from "js-cookie"

export const insertUser = (user: object, res: any) => {
  axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users`, user)
    .then((response) => {
      res(response.data)
    })
    .catch((error) => {
      res(error.response)
  })
}

export const getUserById = (id: string, res: any) => {
  const accessToken = Cookies.get("accessToken")

  const auth = {
    headers:  {
      Authorization: `Bearer ${accessToken}`,
    }
  }

  axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, auth)
    .then((response) => {
      res(response.data)
    })
    .catch((error) => {
      res(error.response)
  })
}