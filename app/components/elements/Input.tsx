type PropsInput = {
  className: string;
  inputRef: any;
  type: string;
  name: string
  placeholder: string;
  minLength: number;
  maxLength: number;
  required: true;
  value: string;
  onChange: (event: any) => void;
}

const Input = (props: PropsInput) => {
  const { className, inputRef, ...rest } = props

  return (
    <>
      <div>
        <input ref={inputRef} {...rest} className={`text-sm italic p-1 w-full focus:outline-primary border-red-500 rounded ${className}`} />
      </div>
    </>
  );
};
export default Input;