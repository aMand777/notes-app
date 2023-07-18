"use client"
import { useState } from "react"
import CreateNote from "../../components/templates/CreateNotes"
import { useNotes } from "@/app/context/notes"
import {useStore} from "@/app/context/store"

const CreatePage = () => {
  const {dispatch} = useStore()
  const {InsertNote} = useNotes()
  const [note, setNote] = useState({
    title: "",
    body: "",
    tags:["low"],
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setNote({ ...note, [name]: value });
    
    if (note.title.length === 49) {
      dispatch({type : "SET_ALERT"})
      dispatch({type : "SET_MESSAGE", payload: "title maksimal 50 karakter"})
    }
  };

  const handleSelect = (event: any) => {
    setNote({ ...note, tags: [event.target.value] });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault()
    InsertNote(note)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CreateNote handleChange={handleChange} handleSelect={handleSelect} />
      </form>
    </>
  );
};

export default CreatePage