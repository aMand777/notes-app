import Button from "../elements/Button"
import { useRouter } from "next/navigation"
import { useStore } from "../../context/store"
import { useState } from "react"
import Loading from "../fragments/Loading"

const DetailNotes = ({ id, title, body, tags, createdAt, updatedAt }: any) => {
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()
  const {dispatch} = useStore()

  const create = new Date(createdAt).toLocaleString('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  });

  const update = new Date(updatedAt).toLocaleString('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  });

  const handleDelete = () => {
    dispatch({ type: "SET_CONFIRM_ALERT" })
  };
    
  const handleUpdate = () => {
    router.push(`/notes/update/${id}?&title=${title}&body=${body}&tags=${tags}`)
    setLoading(true)
  };
  
  return (
    <>
      <Loading validation={loading} />
      <div className="w-10/12 mx-auto my-5 sm:w-7/12 md:w-1/2 lg:w-1/2 h-fit">
          <div className="w-full max-w-sm px-4 mx-auto border border-b-0 shadow-2xl bg-secondary rounded-t-lg min-h-[176px]">
            <h3 className="my-2 text-xl font-bold text-center">{title}</h3>
            <p className="pt-3 pb-10 mx-1 text-sm italic break-words whitespace-break-spaces">{body}</p>
          </div>
          <div className="flex flex-row justify-between w-full max-w-sm mx-auto border border-t-0 bg-secondary shadow-2xl rounded-b-lg">
            <p className="pl-2 italic text-xs">
              #<span className="self-center">{tags}</span>
            </p>
            <p className="self-center pr-2 italic text-slate-700 text-[9px]">{createdAt === updatedAt ? `createdAt  ${create}` : `last_ updated ${update}`}</p>
          </div>
        <div className="flex flex-row justify-between w-full max-w-sm mx-auto mt-3">
          <Button onClick={handleDelete}>Delete</Button>
          <Button onClick={handleUpdate}>Update</Button>
        </div>
      </div>
    </>
  );
};

export default DetailNotes;