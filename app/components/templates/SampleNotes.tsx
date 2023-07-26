const SampleNotes = ({ body, className }: any) => {
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
      <div className={`w-9/12 h-fit sm:w-1/3 max-w-sm mx-auto bg-secondary rounded-xl my-auto mt-2 ${className}`}>
        <div className="p-1 h-36 md:h-40 my-auto text-sm">
          <h3 className="font-bold mb-2 text-center italic">Catatan hari ini</h3>
          <p className="break-words italic p-1 text-start font-thin mx-3">{body.substring(0, 100)}</p>
        </div>
        <div className="bg-secondary rounded-lg flex flex-row justify-between">
          <span className="text-base italic font-medium">
            #<span className="text-[9px] self-center">urgent</span>
          </span>
          <span className="text-[9px] text-slate-700 italic font-medium self-center">{`createdAt ${create}`}</span>
        </div>
      </div>
    </>
  );
};

export default SampleNotes