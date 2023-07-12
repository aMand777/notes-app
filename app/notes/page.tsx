"use client"
import NoteList from "../components/templates/NoteList"
import CreateIcon from "../components/fragments/CreateIcon"
import {useStore} from "../context/store"
import { useEffect, useState } from "react"
import { getNotes } from "../services/notes-service"
import Cookies from "js-cookie"

const token = Cookies.get("accessToken")

const NotesPage = () => {
  const [notes, setNotes] = useState<any[]>([])
  const { setAlertSession, setMessage } = useStore()
  
  useEffect(() => {
    getNotes((res: any) => {
      if (res.status === "success") {
        setNotes(res.data.notes)
      } else if (res.status === 401 || token === undefined) {
        console.log(res)
        setMessage("Sesi Anda telah habis, tetap login ?")
        setAlertSession(true)
      } else {
        console.log(res)
      }
    })
    }, [])
  
  return (
    <>
      <div className="w-9/12 md:w-7/12 lg:w-10/12 mx-auto flex flex-row flex-wrap justify-between">
      {notes.map((note: any) => (
          <NoteList key={note.id} id={note.id} title={note.title} body={note.body} tags={note.tags} createdAt={note.createdAt} updatedAt={note.updatedAt} />
        ))}
      </div>
        <CreateIcon />
    </>
  )
}

export default NotesPage;