const TextArea = (props: any) => {
  const { children, className, ...rest } = props
  
  return (
    <div>
        <textarea className={`${className}`} {...rest}>{children}</textarea>
    </div>
  );
};

export default TextArea;