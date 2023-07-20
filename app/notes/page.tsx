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
      <NotesEmpty validation={notes.length === 0 && !state.loading} />
      {notes.length > 0 ? (
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mx-auto container">
      {notes.map((note: any) => (
        <NoteList key={note.id} id={note.id} title={note.title} body={note.body} tags={note.tags} createdAt={note.createdAt} updatedAt={note.updatedAt} />
        ))}
      </div>
      ) : 
      <NotesLoading validation={state.loading} loop={9} /> 
      }
      <CreateIcon />
    </>
  )
}

export default NotesPage;