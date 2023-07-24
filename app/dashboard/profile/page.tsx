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
      setCurrentImg(res.image)
    })
  }, [])

  return (
    <>
      <UploadImage handleChange={handleChange} handleSubmit={handleSubmit} username={user} currentImg={currentImg} previewImage={previewImage} />
    </>
  )
}

export default ProfilePage