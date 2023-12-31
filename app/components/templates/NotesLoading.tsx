type PropsNotesLoading = {
  validation: boolean;
  loop: number;
}

const NotesLoading = ({ validation, loop }: PropsNotesLoading) => {

  const loadingItems = new Array(loop).fill(null);
  if (validation) {
    
    return (
      <>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mx-auto container">
          {loadingItems.map((_, index) => (
          <div key={index} className="p-4 mx-auto my-5 border rounded-lg shadow-lg lg:mx-5 bg-secondary w-64 sm:w-80 h-fit border-primary">
            <div className="flex space-x-4 animate-pulse">
              <div className="flex-1 py-1 space-y-6">
                <div className="w-1/2 h-2 m-auto rounded bg-slate-500"></div>
                  <div className="h-2 rounded bg-slate-500"></div>
                  <div className="h-2 rounded bg-slate-500"></div>
                  <div className="h-2 rounded bg-slate-500"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 col-span-1 rounded bg-slate-500"></div>
                    <div className="h-2 col-span-2 rounded bg-slate-500"></div>
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