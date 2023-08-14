type PropsInputSampleNote = {
  className: string;
  inputRef: any;
  placeholder: string;
  onChange: (event: any) => void;
  onKeyDown: (event: any) => void;
}

const InputSampleNote = (props: PropsInputSampleNote) => {
  const { className, inputRef, ...rest } = props

  return (
    <>
      <div>
        <input ref={inputRef} {...rest} className={`text-sm italic p-1 w-full focus:outline-primary border-red-500 rounded ${className}`} />
      </div>
    </>
  );
};
export default InputSampleNote;