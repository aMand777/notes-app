type PropsCategory = {
  value: string;
  onChange: (event: any) => void;
}

const Category = ({ ...rest }: PropsCategory) => {
  
  return (
    <div>
      <label htmlFor="tags" className="italic text-xs mr-1">
        Priority :
      </label>
      <select name="tags" id="tags" {...rest} className="rounded-lg bg-primary italic text-md">
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
        <option value="urgent">urgent</option>
      </select>
    </div>
  );
};

export default Category;