"use client"
import { useEffect, useState } from "react"
import UploadImage from "../../components/fragments/UploadImage"
import { useUsers } from "../../context/users"
import { getUser } from "@/app/services/users-service"

const ProfilePage = () => {
  const [previewImage, setPreviewImage] = useState<any>("")
  const [user, setUser] = useState<any>(null)
  const [image, setImage] = useState<any>(null)
  const [currentImg, setCurrentImg] = useState<string>("")
  const [current, setCurrent] = useState<string>("")
  const {UploadImageUser} = useUsers()

  const handleChange = (event: any) => {
    const file = event.target.files[0]
    setPreviewImage(URL.createObjectURL(file))
    setImage(file)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    UploadImageUser(image)
  }

  useEffect(() => {
    getUser((res: any) => {
      setUser(res.username)
      setCurrent(res.image)
      setCurrentImg(`${process.env.NEXT_PUBLIC_API_URL}/upload/images/${res.image}`)
    })
  }, [])

  return (
    <>
      <UploadImage handleChange={handleChange} handleSubmit={handleSubmit} username={user} current={current} currentImg={currentImg} previewImage={previewImage} />
    </>
  )
}

export default ProfilePage