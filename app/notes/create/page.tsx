"use client"
import { useState } from "react"
import CreateNote from "../../components/templates/CreateNotes"
import { useNotes } from "@/app/context/notes"
import {useStore} from "@/app/context/store"
import Alert from "../../components/fragments/Alert"

const CreatePage = () => {
  const {dispatch} = useStore()
  const {InsertNote, notesState} = useNotes()
  const [note, setNote] = useState({
    title: "",
    body: "",
    tags:["low"],
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNote({ ...note, [name]: value });
    
    if (note.title.length === 49) {
      dispatch({type : "SET_ALERT"})
      dispatch({type : "SET_MESSAGE", payload: "title maksimal 50 karakter"})
    }
  };

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNote({ ...note, tags: [event.target.value] });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    InsertNote(note)
  };

  return (
    <>
      <Alert validation={notesState.alert} routes={notesState.route} message={notesState.message} />
      <form onSubmit={handleSubmit}>
        <CreateNote title={note.title} body={note.body} tags={note.tags[0]} handleChange={handleChange} handleSelect={handleSelect} />
      </form>
    </>
  );
};

export default CreatePage