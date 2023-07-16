import axios from "axios"
import Cookies from "js-cookie"

export const insertNote = (data: object, res: any) => {
  const accessToken = Cookies.get("accessToken")
  const auth = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  }
      axios.post(`${process.env.NEXT_PUBLIC_API_URL}/notes`, data, auth)
      .then((response) => {
        res(response.data)
      })
      .catch((error) => {
        res(error.response)
    }) 
}

export const getNotes = (res: any) => {
  const accessToken = Cookies.get("accessToken")
  const auth = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  }
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/notes`, auth)
      .then((response) => {
        res(response.data)
      })
      .catch((error) => {
        res(error.response)
    }) 
}
    
export const deleteNote = (id: string, res: any) => {
  const accessToken = Cookies.get("accessToken")
  const auth = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  }
      axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/notes/${id}`, auth)
      .then((response) => {
        res(response.data)
      })
      .catch((error) => {
        res(error.response)
    }) 
}
    
export const getNoteById = (id: string, res: any) => {
  const accessToken = Cookies.get("accessToken")
  const auth = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  }
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/notes/${id}`, auth)
      .then((response) => {
        res(response.data)
      })
      .catch((error) => {
        res(error.response)
  })
}

export const putNoteById = (id: string, data: object, res: any) => {
  const accessToken = Cookies.get("accessToken")
  const auth = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  }
      axios.put(`${process.env.NEXT_PUBLIC_API_URL}/notes/${id}`, data, auth)
      .then((response) => {
        res(response.data)
      })
      .catch((error) => {
        res(error.response)
  })
}


