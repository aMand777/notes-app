type PropsCheckbox = {
  children: React.ReactNode;
  className: string;
  checked: boolean;
  onChange: (event: any) => void;
}

const Checkbox = ({children, className, ...rest}: PropsCheckbox) => {
    
  return (
      <div className={`${className}`}>
          <input type='checkbox' {...rest} />
          <label className='ml-2 text-sm italic'>{ children }</label>
    </div>
  )
}

export default Checkbox