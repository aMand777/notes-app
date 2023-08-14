type PropsInputLabel = {
  children: React.ReactNode;
  htmlFor: string;
  className: string;
  inputRef: any;
  errorMessage: string;
  type: string;
  name: string
  id: string;
  placeholder: string;
  minLength: number;
  required: true;
  onChange: (event: any) => void;
}

const InputLabel = (props: PropsInputLabel) => {
  const { children, htmlFor, className, inputRef, errorMessage, ...rest } = props

  return (
    <>
      <div className="mb-1">
        <label htmlFor={htmlFor} className="italic">
          {children}
        </label>
      </div>
      <div>
        <input ref={inputRef} {...rest} className={`text-sm italic p-1 w-full focus:outline-primary border-red-500 rounded ${className}`} />
      </div>
      <div className='w-full mx-auto'>
      <p className="text-xs italic text-center text-red-700 focus:hidden">{errorMessage}</p>
      </div>
    </>
  );
};
export default InputLabel;