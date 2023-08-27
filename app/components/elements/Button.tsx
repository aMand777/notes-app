type PropsButton = {
  children: React.ReactNode;
  className?: string;
}

const Button = (Props: PropsButton) => {
  const { children, className } = Props;
  
  return (
    <div>
      <button type="submit" className={`w-14 text-sm h-fit rounded-lg text-white font-semibold py-1 shadow-lg active:cursor-wait ${className || 'bg-sky-500 hover:bg-sky-600'}`}>
        {children}
      </button>
    </div>
  );
}

export default Button