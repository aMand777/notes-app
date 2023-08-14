"use client"
import NoteList from "../components/templates/NoteList"
import CreateIcon from "../components/fragments/CreateIcon"
import { useNotes } from "../context/notes"
import { useEffect, useState } from "react"
import NotesEmpty from "../components/fragments/NotesEmpty"
import NotesLoading from "../components/templates/NotesLoading"

const NotesPage = () => {
  const [notes, setNotes] = useState([])
  const { GetNotes, notesState } = useNotes()
  
  useEffect(() => {
    GetNotes((data: any) => {
      setNotes(data)
    })
  }, [])
  
  return (
    <>
      <NotesEmpty validation={notes.length === 0 && !notesState.loading} />
      {notes.length > 0 ? (
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mx-auto container">
      {notes.map((note: any) => (
        <NoteList key={note.id} id={note.id} title={note.title} body={note.body} tags={note.tags[0]} createdAt={note.createdAt} updatedAt={note.updatedAt} />
        ))}
      </div>
      ) : 
      <NotesLoading validation={notesState.loading} loop={9} />
      }
      <CreateIcon />
    </>
  )
}

export default NotesPage;