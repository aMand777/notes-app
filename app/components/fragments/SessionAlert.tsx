import Button from "../elements/Button";
import { updateSession, logout } from "../../services/auth-service"
import { useRouter } from "next/navigation";
import { useStore } from "../../context/store"
import Cookies from "js-cookie"

type Props = {
  validation: boolean;
  message: string;
}

const SessionAlert = ({ validation, message }: Props) => {
  const {setAlertSession, setMessage, setAlert, setRoutes} = useStore()
  const router = useRouter()
  
  const create = new Date().toLocaleString('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  });

  const handleUpdateSession = () => {
    updateSession((res: any) => {
      if (res.status === "success") {
        router.refresh()
        setAlertSession(false)
        console.log(res)
      } else if (res.status === 400) {
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        console.log(res)
        setAlertSession(false)
        setAlert(true)
        setRoutes("/login")
        setMessage("Gagal memperbarui sesi, silakan login kembali")
      } else {
        console.log(res)
      }
    })
  }

  const handleLogout = () => {
    logout((res: any) => {
      if (res.status === "success") {
        setAlertSession(false)
        router.replace("/login")
      } else if (res.status === 400) {
        setAlertSession(false)
      } else
      console.log(res)
    })
  }

  return (
    <>
      <div className={`z-50 w-screen fixed right-0 bottom-0 items-center h-screen top-0 left-0 bg-black opacity-80 ${validation === true ? 'flex' : 'hidden'}`}></div>
      <div className={`z-50 w-screen fixed flex items-center h-screen top-0 left-0 scale-0 ${validation === true && 'scale-100 transition delay-1000'}`}>
        <div className={validation === true ? "scale-100 transition delay-1000 sm:1/5 md:w-1/4 w-1/2 mx-auto bg-secondary rounded-lg -translate-y-full" : "scale-0"}>
        <div className="p-1">
          <p className="text-xs break-words italic p-1 text-center my-5">{message}</p>
        </div>
          <div className="flex flex-row justify-between mx-2 mb-2 sm:mb-0">
            <button onClick={handleLogout}>
              <p className="text-blue-500 text-xs italic hover:text-blue-600 hover:font-semibold active:cursor-wait">logout</p>
            </button>
          <Button onClick={handleUpdateSession}>
            Ok
          </Button>
        </div>
        <div className="bg-secondary rounded-lg flex-row justify-between hidden sm:flex">
          <span className="text-base font-thin italic">
            #<span className="text-xs self-center font-thin">urgent</span>
          </span>
          <span className="text-[11px] text-slate-700 italic self-center font-thin">{create}</span>
        </div>
      </div>
      </div>
    </>
  );
};

export default SessionAlert;