"use client"
import { useContext, createContext } from "react";
import Cookies from "js-cookie"
import { getNotes, getNoteById, deleteNote, insertNote, putNoteById } from "../services/notes-service";
import {useStore} from "../context/store"

export const Notes = createContext<any>(null)
export const useNotes = () => useContext(Notes)
    
const NotesProvider = ({ children }: any) => {
  const {dispatch} = useStore()
  const token = Cookies.get("accessToken")
  
  const GetNotes = (data: any) => {

    getNotes((res: any) => {
      dispatch({type: "SET_LOADING"})
      if (res.status === "success") {
        data(res.data.notes)
        dispatch({type: "SET_DEFAULT"})
      } else if (res.status === 401 || token === undefined) {
        dispatch({type: "SET_DEFAULT"})
        console.log(res)
        dispatch({type: "SET_ALERT_SESSION"})
        dispatch({type: "SET_MESSAGE", payload: "Sesi kamu telah habis, tetap login ?"})
      } else {
        console.log(res)
      }
    })
  }

  const GetNoteById = (id: string, data: any) => {

    getNoteById(id, (res: any) => {
      dispatch({type: "SET_LOADING"})
      if (res.status === "success") {
        data(res.data.note)
      dispatch({type: "SET_DEFAULT"})
    } else if (res.status === 401 || token === undefined) {
      console.log(res)
      dispatch({type: "SET_ALERT_SESSION"})
      dispatch({type: "SET_MESSAGE", payload: "Sesi kamu telah habis, tetap login ?"})
      } else if (res.status === 404) {
      console.log(res)
      dispatch({type: "SET_ALERT"})
      dispatch({type: "SET_MESSAGE", payload: res.data.message})
      dispatch({type: "SET_ROUTES", payload: "/notes"})
    } else {
      console.log(res)
    }
    })
  }

  const DeleteNote = (id: string) => {

    deleteNote(id, (res: any) => {
      if (res.status === "success") {
        console.log(res)
        dispatch({ type: "SET_DEFAULT" })
        dispatch({type: "SET_MESSAGE", payload: res.message})
        dispatch({ type: "SET_ALERT" })
        dispatch({type: "SET_ROUTES", payload: "/notes"})
    } else if (res.status === 401 || token === undefined) {
      console.log(res)
      dispatch({type: "SET_ALERT_SESSION"})
      dispatch({type: "SET_MESSAGE", payload: "Sesi kamu telah habis, tetap login ?"})
      } else if (res.status === "fail") {
      console.log(res)
      dispatch({type: "SET_ALERT"})
      dispatch({type: "SET_MESSAGE", payload: res.data.message})
      dispatch({type: "SET_ROUTES", payload: "/notes"})
    } else {
      console.log(res)
    }
    })
  }

  const InsertNote = (data: object) => {

    insertNote(data, (res: any) => {
      if (res.status === "success") {
        console.log(res)
        dispatch({type: "SET_MESSAGE", payload: res.message})
        dispatch({ type: "SET_ALERT" })
        dispatch({type: "SET_ROUTES", payload: "/notes"})
    } else if (res.status === 401 || token === undefined) {
      console.log(res)
      dispatch({type: "SET_ALERT_SESSION"})
      dispatch({type: "SET_MESSAGE", payload: "Sesi kamu telah habis, tetap login ?"})
      } else if (res.status === "fail") {
      console.log(res)
      dispatch({type: "SET_ALERT"})
      dispatch({type: "SET_MESSAGE", payload: res.data.message})
      dispatch({type: "SET_ROUTES", payload: "/notes"})
    } else {
      console.log(res)
    }
    })
  }

  const EditNoteById = (id: string, data: object) => {

    putNoteById(id, data, (res: any) => {
      if (res.status === "success") {
        console.log(res)
        dispatch({type: "SET_MESSAGE", payload: res.message})
        dispatch({ type: "SET_ALERT" })
        dispatch({type: "SET_ROUTES", payload: "/notes"})
    } else if (res.status === 401 || token === undefined) {
      console.log(res)
      dispatch({type: "SET_ALERT_SESSION"})
      dispatch({type: "SET_MESSAGE", payload: "Sesi kamu telah habis, tetap login ?"})
      } else if (res.status === "fail") {
      console.log(res)
      dispatch({type: "SET_ALERT"})
      dispatch({type: "SET_MESSAGE", payload: res.data.message})
      dispatch({type: "SET_ROUTES", payload: "/notes"})
    } else {
      console.log(res)
    }
    })
  }
  
  return <Notes.Provider value={{ GetNotes, GetNoteById, DeleteNote, InsertNote, EditNoteById }}>{children}</Notes.Provider>
}

export default NotesProvider;
