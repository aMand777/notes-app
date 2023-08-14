type PropsTextArea = {
  className: string;
  type: string;
  rows: number;
  id: string;
  name: string;
  required: true;
  value: string;
  placeholder: string;
  onChange: (event: any) => void;
}

const TextArea = (props: PropsTextArea) => {
  const { className, ...rest } = props
  
  return (
    <div>
      <textarea className={`${className}`} {...rest}></textarea>
    </div>
  );
};

export default TextArea;