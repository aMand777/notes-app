import Image from "next/image"
import { useRouter } from "next/navigation"
import Loading from "./Loading"
import { useState } from "react"


const CreateIcon = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()

  const handleCreateIcon = () => {
    router.push("/notes/create")
    setLoading(true)
  }

  return (
    <>
    <Loading validation={loading} />
    <div className="sticky flex flex-row flex-wrap justify-end w-10/12 mx-auto bottom-3">
      <div className="cursor-pointer hover:scale-125">
        <button onClick={handleCreateIcon} >
        <Image src="/img/add-icon.png" alt="icon-add" width={25} height={25} className="hover:border hover:border-primary hover:rounded-lg" />
        </button>
      </div>
    </div>
    </>
  );
};

export default CreateIcon;
