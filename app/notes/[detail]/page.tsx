"use client"
import DetailNotes from "../../components/templates/DetailNotes"
import LoadingDetail from "../../components/templates/LoadingDetail"
import {getNoteById, deleteNote} from "../../services/notes-service"
import { useState, useEffect } from "react"
import {useStore} from "../../context/store"
import { useRouter } from "next/navigation"
import { useNotes } from "@/app/context/notes"

const DetailNotePage = ({ params }: { params: { detail: string } }) => {
  const router = useRouter()
  const { confirm, setConfirm, setConfirmAlert, setAlert, setMessage, setRoutes, state, dispatch } = useStore()
  const {GetNoteById, DeleteNote} = useNotes()
  const [note, setNote] = useState<any>()
  const id = params.detail;
  
  useEffect(() => {
    GetNoteById(id, (data: any) => {
      setNote(data)
    })
  }, [id])
  
    if (state.confirm) {
      DeleteNote(id)
    }

  return (
    <>
      {note !== undefined ?
      (<DetailNotes key={note.id} id={note.id} title={note.title} body={note.body} tags={note.tags} createdAt={note.createdAt} updatedAt={note.updatedAt} />)
      : (
        <LoadingDetail />
      )}
    </>
  );
};

export default DetailNotePage;