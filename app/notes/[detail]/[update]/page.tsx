"use client"
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import UpdateNote from "../../../components/templates/UpdateNote"
import { useNotes } from "../../../context/notes"


const UpdatePage = ({ params }: { params: { update: string } }) => {
  const searchParams = useSearchParams()
  const title = searchParams.get("title")
  const body = searchParams.get("body")
  const tags = searchParams.get("tags")
  const id = params.update
  
  const { EditNoteById } = useNotes()
  const [note, setNote] = useState<any>({title, body, tags });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setNote({ ...note, [name]: value });
  };

  const handleSelect = (event: any) => {
    setNote({ ...note, tags: [event.target.value] });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    EditNoteById(id, note)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <UpdateNote id={id} title={note.title} body={note.body} tags={note.tags} handleChange={handleChange} handleSelect={handleSelect} />
      </form>
    </>
  );
};

export default UpdatePage