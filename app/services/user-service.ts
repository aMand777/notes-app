import axios from "axios";

export const insertUser = (user: object, res: any) => {
  axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users`, user)
    .then((response) => {
      res(response.data)
    })
    .catch((error) => {
      res(error.response)
  })
}