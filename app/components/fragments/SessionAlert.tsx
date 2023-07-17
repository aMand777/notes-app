import Button from "../elements/Button";
import { updateSession, logout } from "../../services/auth-service"
import { useRouter } from "next/navigation";
import { useStore } from "../../context/store"
import { useNotes } from "../../context/notes";
import { useAuth } from "../../context/auth";
import Alert from "./Alert"
import Cookies from "js-cookie"

type Props = {
  validation: boolean;
  message: string;
}

const SessionAlert = ({ validation, message }: Props) => {
  const {UpdateSession, Logout} = useAuth()
  const {state, dispatch} = useNotes()
  const {setAlertSession, setMessage, setAlert, setRoutes} = useStore()
  const router = useRouter()
  
  const date = new Date().toLocaleString('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  });

  const handleUpdateSession = () => {
    UpdateSession()
  }

  const handleLogout = () => {
    Logout()
  }

  return (
    <>
      <div className={`z-50 w-screen fixed right-0 bottom-0 items-center h-screen top-0 left-0 bg-black opacity-80 ${validation === true ? 'flex' : 'hidden'}`}></div>
      <div className={`z-50 w-screen fixed flex items-center h-screen top-0 left-0 scale-0 ${validation === true && 'scale-100 transition delay-1000'}`}>
        <div className={validation === true ? "scale-100 transition delay-1000 sm:w-1/3 md:w-1/4 w-1/2 mx-auto bg-secondary rounded-lg -translate-y-full" : "scale-0"}>
        <div className="p-1">
          <p className="p-1 my-5 text-xs italic text-center break-words">{message}</p>
        </div>
          <div className="flex flex-row justify-between mx-2 mb-2 sm:mb-0">
            <button onClick={handleLogout}>
              <p className="text-xs italic text-blue-500 hover:text-blue-600 hover:font-semibold active:cursor-wait">logout</p>
            </button>
          <Button onClick={handleUpdateSession}>
            Ok
          </Button>
        </div>
        <div className="flex-row justify-between hidden rounded-lg bg-secondary sm:flex">
          <span className="text-base italic font-thin">
            #<span className="self-center text-xs font-thin">urgent</span>
          </span>
          <span className="text-[11px] text-slate-700 italic self-center font-thin">{date}</span>
        </div>
      </div>
      </div>
    </>
  );
};

export default SessionAlert;