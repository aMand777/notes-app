'use client'

const Checkbox = ({ children, className, ...rest }: any) => {
    
  return (
      <div className={`${className}`}>
          <input type='checkbox'{...rest} />
          <label className='ml-2 text-sm italic'>{ children }</label>
    </div>
  )
}

export default Checkbox