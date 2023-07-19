import NavBar from "../components/templates/Navbar"

export const metadata = {
  title: "NotesApp | Notes",
  description: "Notes App Notes Page",
}

const LayoutDashboard = ({ children }: {children: React.ReactNode}) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default LayoutDashboard;