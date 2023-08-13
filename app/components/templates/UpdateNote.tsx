import React from "react"
import InputLabel from "../elements/InputLabel"
import TextArea from "../elements/TextArea"
import Category from "../fragments/Category"
import Link from "next/link"
import Button from "../elements/Button"
import { useRef, useEffect } from "react"

const UpdateNotes = ({ id, title, body, tags, handleChange, handleSelect }: any) => {
  const focusInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (focusInput.current) {
      focusInput.current.focus();
    }
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <div className="w-10/12 max-w-md mx-auto my-5 rounded-lg shadow-2xl bg-secondary sm:w-1/2 h-fit">
          <div className="p-1 ">
            <p className="text-center border border-white rounded-lg">
              <InputLabel
                inputRef={focusInput}
                type="text"
                name="title"
                placeholder="title .."
                minLength={3}
                maxLength={20}
                required
                value={title}
                onChange={handleChange}
                className="w-8/12 italic text-center bg-secondary focus:outline-none"
              />
            </p>
            <p className="mx-1 my-3 text-sm italic">
              <TextArea type="body" rows="5" id="body" name="body" required value={body} onChange={handleChange} placeholder="input your note here .." className="w-full italic resize-none bg-secondary focus:outline-none h-fit md:h-52 px-2" />
            </p>
          </div>
          <div className="flex flex-row justify-between w-full mx-auto border border-white rounded-lg bg-secondary">
            <Category value={tags} onChange={handleSelect} />
            <p className="self-center text-xs italic text-slate-700"></p>
          </div>
        </div>
        <div className="flex flex-row justify-between mx-auto w-10/12 max-w-md sm:w-1/2">
          <Link href={`/notes/${id}`}>
            <Button>Back</Button>
          </Link>
          <Button>Save</Button>
        </div>
      </div>
    </>
  );
};

export default UpdateNotes;