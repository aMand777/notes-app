const Button = ({ children, className, ref, ...rest }: any) => {
  
  return (
    <div className={`${className}`}>
      <button {...rest} type="submit" className="min-w-[40px] bg-sky-500 rounded-lg text-white text-[9px] font-semibold py-[3px] hover:bg-sky-600 shadow-lg active:cursor-wait">
        {children}
      </button>
    </div>
  );
}

export default Button