const Button = ({children}: {children: React.ReactNode}) => {
  
  return (
    <div>
      <button type="submit" className="w-14 text-sm h-fit bg-sky-500 rounded-lg text-white font-semibold py-1 hover:bg-sky-600 shadow-lg active:cursor-wait">
        {children}
      </button>
    </div>
  );
}

export default Button