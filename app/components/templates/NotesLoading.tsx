const NotesLoading = ({ validation, loop }: any) => {

  const loadingItems = new Array(loop).fill(null);
  if (validation) {
    return (
      <>
        <div className="flex flex-row flex-wrap justify-between w-9/12 mx-auto md:w-7/12 lg:w-10/12">
          {loadingItems.map((_, index) => (
          <div key={index} className="mx-auto my-5 ease-in-out delay-300 rounded-lg shadow-lg lg:mx-5 bg-secondary w-80 h-fit p-4 border border-primary">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 w-1/2 bg-slate-500 rounded m-auto"></div>
                  <div className="h-2 bg-slate-500 rounded"></div>
                  <div className="h-2 bg-slate-500 rounded"></div>
                  <div className="h-2 bg-slate-500 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-500 rounded col-span-1"></div>
                    <div className="h-2 bg-slate-500 rounded col-span-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </>
    );

  }
};

export default NotesLoading;