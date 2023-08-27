"use client"
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import UpdateNote from "../../../components/templates/UpdateNote"
import { useNotes } from "../../../context/notes"
import Alert from "../../../components/fragments/Alert"


const UpdatePage = ({ params }: { params: { update: string } }) => {
  const searchParams = useSearchParams()
  const title = searchParams.get("title")
  const body = searchParams.get("body")
  const tags = searchParams.get("tags")
  const id = params.update
  
  const { EditNoteById, notesState } = useNotes()
  const [note, setNote] = useState<any>({title, body, tags: [tags] });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNote({ ...note, [name]: value });
  };

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNote({ ...note, tags: [event.target.value] });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    EditNoteById(id, note)
  };

  return (
    <>
    <Alert validation={notesState.alert} routes={notesState.route} message={notesState.message} />
      <form onSubmit={handleSubmit}>
        <UpdateNote id={id} title={note.title} body={note.body} tags={note.tags} handleChange={handleChange} handleSelect={handleSelect} />
      </form>
    </>
  );
};

export default UpdatePage