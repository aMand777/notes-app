import Button from "../elements/Button";

const Alert = ({ validation, routes, message }: any) => {
  const alert = () => {
    routes()
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
      <div className={`z-50 w-screen absolute items-center h-screen top-0 left-0 bg-black opacity-80 ${validation === true ? 'flex' : 'hidden'}`}></div>
      <div className={`z-50 w-screen absolute flex items-center h-screen top-0 left-0 scale-0 ${validation === true && 'scale-100 transition delay-1000'}`}>
        <div className="w-1/4 mx-auto bg-secondary rounded-lg my-auto mt-2">
        <div className="p-1">
          <p className="text-sm break-words italic p-1 text-center my-5">{message}</p>
        </div>
        <div className='flex flex-row justify-end mr-3'>
          <Button onClick={alert}>
            Ok
          </Button>
        </div>
        <div className="bg-secondary rounded-lg flex flex-row justify-between">
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

export default Alert;