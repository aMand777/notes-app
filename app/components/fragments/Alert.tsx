import { useRouter } from "next/navigation";
import Button from "../elements/Button"
import { useStore } from "../../context/store"
import { useNotes } from "../../context/notes"
import { useUsers } from "../../context/users"

type PropsAlert = {
  validation: boolean;
  message: string;
  routes: string;
}

const Alert = (props: PropsAlert) => {
  const { validation, message, routes } = props

  const router = useRouter()
  const { dispatch } = useStore()
  const { notesDispatch } = useNotes()
  const { usersDispatch } = useUsers()

  const handleRoute = () => {
    dispatch({ type: "SET_DEFAULT" })
    notesDispatch({ type: "SET_DEFAULT" })
    usersDispatch({ type: "SET_DEFAULT" })
    router.replace(routes)
  }

  const create = new Date().toLocaleString('id-ID', {
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
      <div className={`z-50 w-screen fixed items-center h-screen inset-0 left-0 bg-black opacity-80 ${validation === true ? 'flex' : 'hidden'}`}></div>
      <div className={`z-50 w-screen fixed flex items-center h-screen inset-0 left-0 scale-0 ${validation === true && 'scale-100 transition delay-1000'}`}>
        <div className={validation === true ? "scale-100 transition delay-500 md:w-1/4 sm:w-1/3 w-1/2 max-w-md mx-auto bg-secondary rounded-lg -translate-y-full" : "scale-0"}>
        <div className="p-1">
          <p className="text-xs break-words italic p-1 text-center my-5">{message}</p>
        </div>
        <div className='flex flex-row justify-end mr-3 mb-2'>
          <Button onClick={handleRoute}>
            Ok
          </Button>
        </div>
        <div className="bg-secondary rounded-lg flex-row justify-between hidden sm:flex text-[9px] ">
          <span className="font-thin italic">
            #<span className="self-center font-thin">urgent</span>
          </span>
          <span className="text-slate-700 italic self-center font-thin">{create}</span>
        </div>
      </div>
      </div>
    </>
  );
};

export default Alert;