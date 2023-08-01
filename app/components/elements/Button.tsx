const Button = ({children, ...rest}: any) => {
  
  return (
    <div>
      <button {...rest} type="submit" className="w-14 text-sm h-fit bg-sky-500 rounded-lg text-white font-semibold py-1 hover:bg-sky-600 shadow-lg active:cursor-wait">
        {children}
      </button>
    </div>
  );
}

export default Button