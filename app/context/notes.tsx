"use client"
import { useContext, createContext, useReducer } from "react";
import Cookies from "js-cookie"
import { getNotes, getNoteById, deleteNote, insertNote, putNoteById } from "../services/notes-service";
import { useStore } from "../context/store"


const InitialNotesState = {
  alert: false,
  loading: false,
  message: "",
  routes: "",
}

const NotesReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true };
    case "SET_INSERT_NOTE_SUCCESS":
      return { ...state,
        loading: false,
        alert : true,
        message: action.payload,
        route: "/notes",
      };
      case "SET_INSERT_NOTE_FAILED":
        return { ...state,
          loading: false,
          alert : true,
          message: action.payload,
          route: "/notes",
      };
      case "SET_UPDATE_NOTE_SUCCESS":
        return { ...state,
          loading: false,
          alert : true,
          message: action.payload,
          route: "/notes",
        };
        case "SET_UPDATE_NOTE_FAILED":
          return { ...state,
            loading: false,
            alert : true,
            message: action.payload,
            route: "/notes",
      };
    case "SET_DELETE_NOTE_SUCCESS":
      return { ...state,
        loading: false,
        alert : true,
        message: action.payload,
        route: "/notes",
      };
    case "SET_DELETE_NOTE_FAILED":
      return { ...state,
        loading: false,
        alert : true,
        message: action.payload,
        route: "/notes",
      };
    case "SET_DEFAULT":
      return InitialNotesState;
    default:
      break;
  }
}

export const Notes = createContext<any>(null)
export const useNotes = () => useContext(Notes)
    
const NotesProvider = ({ children }: any) => {
  const [notesState, notesDispatch] = useReducer(NotesReducer, InitialNotesState)
  const {dispatch} = useStore()
  const token = Cookies.get("accessToken")
  
  const GetNotes = (data: any) => {
    notesDispatch({type: "SET_LOADING"})

    getNotes((res: any) => {
      if (res.status === "success") {
        data(res.data.notes)
        notesDispatch({type: "SET_DEFAULT"})
      } else if (res.status === 401 || token === undefined) {
        dispatch({type: "SET_DEFAULT"})
        dispatch({type: "SET_ALERT_SESSION"})
        dispatch({type: "SET_MESSAGE", payload: "Sesi kamu telah habis, tetap login ?"})
      } else {
        console.log(res.status)
      }
    })
  }

  const GetNoteById = (id: string, data: any) => {
    notesDispatch({type: "SET_LOADING"})

    getNoteById(id, (res: any) => {
      if (res.status === "success") {
        data(res.data.note)
        notesDispatch({type: "SET_DEFAULT"})
    } else if (res.status === 401 || token === undefined) {
      dispatch({type: "SET_ALERT_SESSION"})
      dispatch({type: "SET_MESSAGE", payload: "Sesi kamu telah habis, tetap login ?"})
      } else if (res.status === 404) {
        notesDispatch({type: "SET_DEFAULT"})
    } else {
      console.log(res.status)
    }
    })
  }

  const DeleteNote = (id: string) => {
    notesDispatch({type: "SET_LOADING"})
    
    deleteNote(id, (res: any) => {
      if (res.status === "success") {
        notesDispatch({type: "SET_DELETE_NOTE_SUCCESS", payload: res.message})
    } else if (res.status === 401 || token === undefined) {
      dispatch({type: "SET_ALERT_SESSION"})
      dispatch({type: "SET_MESSAGE", payload: "Sesi kamu telah habis, tetap login ?"})
      } else if (res.status === "fail") {
        notesDispatch({type: "SET_DELETE_NOTE_FAILED", payload: res.data.message})
    } else {
      console.log(res.status)
    }
    })
  }

  const InsertNote = (data: object) => {
    notesDispatch({type: "SET_LOADING"})

    insertNote(data, (res: any) => {
      if (res.status === "success") {
        notesDispatch({type: "SET_INSERT_NOTE_SUCCESS", payload: res.message})
      } else if (res.status === 401 || token === undefined) {
        dispatch({type: "SET_ALERT_SESSION"})
        dispatch({type: "SET_MESSAGE", payload: "Sesi kamu telah habis, tetap login ?"})
      } else if (res.status === "fail") {
        dispatch({type: "SET_INSERT_NOTE_FAILED", payload: res.message})
    } else {
      console.log(res.status)
    }
    })
  }

  const EditNoteById = (id: string, data: object) => {
    notesDispatch({type: "SET_LOADING"})

    putNoteById(id, data, (res: any) => {
      if (res.status === "success") {
        notesDispatch({type: "SET_UPDATE_NOTE_SUCCESS", payload: res.message})
    } else if (res.status === 401 || token === undefined) {
      dispatch({type: "SET_ALERT_SESSION"})
      dispatch({type: "SET_MESSAGE", payload: "Sesi kamu telah habis, tetap login ?"})
      } else if (res.status === "fail") {
        dispatch({type: "SET_UPDATE_NOTE_FAILED", payload: res.message})
    } else {
      console.log(res.status)
    }
    })
  }
  
  return <Notes.Provider value={{ GetNotes, GetNoteById, DeleteNote, InsertNote, EditNoteById, notesState, notesDispatch }}>{children}</Notes.Provider>
}

export default NotesProvider;
