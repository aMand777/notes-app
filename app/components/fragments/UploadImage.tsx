
import InputLabel from "../elements/InputLabel"
import Button from "../elements/Button"
import Image from "next/image"

type Props = {
  handleSubmit: (event: any) => void,
  handleChange: (event: any) => void,
  currentImg: string,
  username: string,
  current: string,
  previewImage: any,
}

const UploadImage = ({ handleSubmit, handleChange, username, current, currentImg, previewImage }: Props) => {

  return (
    <div className="w-8/12 max-w-sm p-3 mx-auto rounded-lg sm:w-1/2 sm:h-1/2 outline-double outline-primary bg-secondary">
      <p className="text-xs italic font-semibold text-center lg:text-sm">{username}</p>
      <div className="relative w-20 h-20 mx-auto overflow-hidden bg-cover rounded-full outline-primary outline outline-1 inset-y-1 sm:w-36 sm:h-36">
      <Image src={previewImage || (current && currentImg) || "/img/pic-icon.svg"} alt="preview-image" fill={true} />
      </div>
      <p className="mt-3 text-xs italic text-center">Max 100kb</p>
      <form onSubmit={handleSubmit}>
        <InputLabel type="file" onChange={handleChange} className="outline-primary outline-1" />
        <Button>Upload</Button>
      </form>
    </div>
  )
}

export default UploadImage