const Loading = ({ validation, message }: any) => {

  return (
    <>
      <div className={`z-50 w-screen absolute items-center h-screen top-0 left-0 bg-black opacity-80 ${validation === true ? 'flex' : 'hidden'}`}></div>
      <div className={`z-50 w-screen absolute flex items-center h-screen top-0 left-0 scale-0 ${validation === true && 'scale-100 transition delay-1000'}`}>
        {/* <div className="sm:w-1/4 w-1/2 mx-auto bg-secondary rounded-lg my-auto mt-2"> */}
        <div className={validation === true ? "scale-100 transition delay-1000 sm:w-1/4 w-1/2 mx-auto bg-secondary rounded-lg -translate-y-full" : "scale-0"}>
        <div className="p-1">
          <p className="text-xs sm:text-sm break-words italic p-1 text-center my-5">{message}</p>
        </div>
      </div>
      </div>
    </>
  );
}

export default Loading