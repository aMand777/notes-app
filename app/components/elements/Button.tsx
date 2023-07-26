const Button = ({ children, className, ref, ...rest }: any) => {
  
  return (
    <div className={`${className}`}>
      <button {...rest} type="submit" className="w-14 text-sm sm:w-[40px] sm:py-0 h-fit bg-sky-500 rounded-lg text-white sm:text-[9px] font-semibold py-1 hover:bg-sky-600 shadow-lg active:cursor-wait">
        {children}
      </button>
    </div>
  );
}

export default Button