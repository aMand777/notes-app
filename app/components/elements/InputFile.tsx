type PropsInputFile = {
  className: string;
  type: string;
  onChange: (event: any) => void;
}

const InputFile = (props: PropsInputFile) => {
  const { className, ...rest } = props

  return (
    <>
      <div>
        <input {...rest} className={`text-sm italic p-1 w-full focus:outline-primary border-red-500 rounded ${className}`} />
      </div>
    </>
  );
};
export default InputFile;