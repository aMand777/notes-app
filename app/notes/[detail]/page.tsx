"use client"
import DetailNotes from "../../components/templates/DetailNotes"
import LoadingDetail from "../../components/templates/LoadingDetail"
import {getNoteById, deleteNote} from "../../services/notes-service"
import { useState, useEffect } from "react"
import {useStore} from "../../context/store"
import { useRouter } from "next/navigation"

const DetailNotePage = ({ params }: { params: { detail: string } }) => {
  const router = useRouter()
  const {confirm, setConfirm, setConfirmAlert, setAlert, setMessage, setRoutes} = useStore()
  const [note, setNote] = useState<any>()
  const id = params.detail;
  
  useEffect(() => {
    getNoteById(id, (res:any) => {
      if (res.status === "success") {
        setNote(res.data.note)
      } else {
        console.log(res)
      }
    })
  }, [id])
  
  if (confirm) {
    deleteNote(id, (res:any) => {
      if (res.status === "success") {
        setMessage("Catatan berhasil dihapus")
        setAlert(true)
        setConfirm(false)
        setConfirmAlert(false)
        setRoutes("/notes")
      } else if (res.data.status === "fail") {
        setRoutes("/notes")
        setMessage("Gagal menghapus catatan")
        setAlert(true)
        setConfirm(false)
        setConfirmAlert(false)
      } else {
        console.log(res)
      }
    })
  }
  
  // console.log('note===>', note)

  
  // const handleDeleted = () => {
  //   deleteNote(id, (res: any) => {
      
  //   });
  // };

  return (
    <>
    <h1>Ini adalah catatan dengan id : { params.detail } </h1>
      {note !== undefined ?
      (<DetailNotes key={note.id} id={note.id} title={note.title} body={note.body} tags={note.tags} createdAt={note.createdAt} updatedAt={note.updatedAt} />)
      : (
        <LoadingDetail />
      )}
    </>
  );
};

export default DetailNotePage;