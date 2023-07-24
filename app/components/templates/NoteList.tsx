import Loading from "../fragments/Loading"
import { useState } from "react";
import { useRouter } from "next/navigation";

const NoteList = ({ id, title, body, tags, createdAt, updatedAt }: any) => {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
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

  const handleClick = () => {
    setLoading(true)
    router.push(`/notes/${id}`)
  }

  return (
    <>
      <Loading validation={loading} />
      <button onClick={handleClick} >
      <div className="w-8/12 mx-auto my-3 ease-in-out delay-300 rounded-lg shadow-lg cursor-pointer bg-secondary sm:w-80 hover:scale-105">
          <div className="h-40 p-1">
            <h3 className="my-2 text-lg font-bold text-center">{title}</h3>
            <p className="px-3 pt-2 pb-5 text-sm break-words whitespace-pre-line text-start">{body.substring(0, 150)}</p>
          </div>
          <div className="flex flex-row justify-between mt-5 rounded-lg bg-secondary text-[9px] ">
            <span className="italic font-medium">
              #<span className="self-center text-xs">{tags}</span>
            </span>
            <span className="text-slate-700 italic font-medium self-center">{createdAt === updatedAt ? `createdAt  ${create}` : `updatedAt ${update}`}</span>
          </div>
      </div>
      </button>
    </>
  );
};

export default NoteList