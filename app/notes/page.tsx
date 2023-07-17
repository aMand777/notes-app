"use client"
import NoteList from "../components/templates/NoteList"
import CreateIcon from "../components/fragments/CreateIcon"
import { useStore } from "../context/store"
import { useNotes } from "../context/notes"
import { useEffect, useState } from "react"
import NotesEmpty from "../components/fragments/NotesEmpty"
import NotesLoading from "../components/templates/NotesLoading"

const NotesPage = () => {
  const [notes, setNotes] = useState<any[]>([])
  const { GetNotes } = useNotes()
  const {state} = useStore()
  
  useEffect(() => {
    GetNotes((data: any) => {
      setNotes(data)
    })
  }, [])
  
  return (
    <>
      <NotesLoading validation={state.loading} loop={9} />
      {notes.length > 0 ? (
      <div className="flex flex-row flex-wrap justify-between w-9/12 mx-auto md:w-7/12 lg:w-10/12">
      {notes.map((note: any) => (
        <NoteList key={note.id} id={note.id} title={note.title} body={note.body} tags={note.tags} createdAt={note.createdAt} updatedAt={note.updatedAt} />
        ))}
      </div>
      ) : <NotesEmpty /> }
        <CreateIcon />
    </>
  )
}

export default NotesPage;