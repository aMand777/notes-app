import Link from "next/link"
import Loading from "../fragments/Loading"
import { useState } from "react";

const NoteList = ({ id, title, body, tags, createdAt, updatedAt }: any) => {
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


  return (
    <>
      <Loading validation={loading} />
      <button onClick={() => setLoading(true)} >
      <div className="mx-auto my-5 ease-in-out delay-300 rounded-lg shadow-lg cursor-pointer lg:mx-5 bg-secondary w-80 hover:scale-105">
        <Link href={`/notes/${id}`}>
          <div className="p-1 h-40">
            <h3 className="mb-2 text-xl font-bold text-center">{title}</h3>
            <p className="text-start px-3 pt-2 pb-5 text-sm break-words">{body.substring(0, 150)}</p>
          </div>
          <div className="flex flex-row justify-between rounded-lg bg-secondary">
            <span className="text-base italic font-medium">
              #<span className="self-center text-xs">{tags}</span>
            </span>
            <span className="text-[11px] text-slate-700 italic font-medium self-center">{createdAt === updatedAt ? `createdAt  ${create}` : `updatedAt ${update}`}</span>
          </div>
        </Link>
      </div>
      </button>
    </>
  );
};

export default NoteList