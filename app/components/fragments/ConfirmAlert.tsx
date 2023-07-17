import Button from "../elements/Button"
import { useStore } from "../../context/store"

type Props = {
  validation: boolean;
  message: string;
}

const ConfirmAlert = ({ validation }: Props) => {
  const { dispatch } = useStore()

  const handleConfirm = () => {
    dispatch({type: "SET_CONFIRM"})
  }

  const handleBack = () => {
    dispatch({type: "SET_DEFAULT"})
  }

  const date = new Date().toLocaleString('id-ID', {
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
      <div className={`z-50 w-screen absolute items-center h-screen top-0 left-0 bg-black opacity-80 ${validation === true ? 'flex' : 'hidden'}`}></div>
      <div className={`z-50 w-screen absolute flex items-center h-screen top-0 left-0 scale-0 ${validation === true && 'scale-100 transition delay-1000'}`}>
        <div className={validation === true ? "scale-100 transition delay-1000 md:w-1/4 sm:w-1/3 w-1/2 mx-auto bg-secondary rounded-lg -translate-y-full" : "scale-0"}>
        <div className="p-1">
          <p className="p-1 my-5 text-xs italic text-center break-words">Apakah kamu yakin ?</p>
        </div>
        <div className='flex flex-row justify-between mx-3 sm:mb-0 mb-2'>
          <Button onClick={handleBack}>
            Back
          </Button>
          <Button onClick={handleConfirm}>
            Yes
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

export default ConfirmAlert;