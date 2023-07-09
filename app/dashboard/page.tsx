import NoteList from "../components/templates/NoteList"
import CreateIcon from "../components/fragments/CreateIcon"

const Dashboard = () => {
  return (
    <>
      {/* <div  className="w-screen bg-blue-300"> */}
      <div className="w-9/12 md:w-7/12 lg:w-10/12 mx-auto flex flex-row flex-wrap justify-between">
        <NoteList />
        <NoteList />
        <NoteList />
        <NoteList />
        <NoteList />
        <NoteList />
        <NoteList />
        <NoteList />
        <NoteList />
      </div>
      <CreateIcon />
      {/* </div> */}
    </>
  )
}

export default Dashboard