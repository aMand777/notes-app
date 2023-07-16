const TextArea = ({ children, className, ...rest }: any) => {
  return (
    <div>
        <textarea className={`${className}`} {...rest}>{children}</textarea>
    </div>
  );
};

export default TextArea;