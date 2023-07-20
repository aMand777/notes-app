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

export const uploadImage = (file: any, res: any) => {

  const accessToken = Cookies.get("accessToken");

  const formData = new FormData();
  formData.append("data", file);

  const auth = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data"
    },
  };

  axios.post(`${process.env.NEXT_PUBLIC_API_URL}/upload/images`, formData, auth)
    .then((response) => {
      res(response.data)
    })
    .catch((error) => {
      res(error.response)
  })
}

export const getUser = (res: any) => {
  const accessToken = Cookies.get("accessToken")
  const id = Cookies.get("userId")

  const auth = {
    headers:  {
      Authorization: `Bearer ${accessToken}`,
    }
  }

  axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, auth)
    .then((response) => {
      res(response.data.data.user)
    })
    .catch((error) => {
      res(error.response)
  })
}