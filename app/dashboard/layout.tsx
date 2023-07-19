import NavBar from "../components/templates/Navbar"

export const metadata = {
  title: "NotesApp | Dashboard",
  description: "Notes App Dashboard Page",
}

const LayoutDashboard = ({ children }: any) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default LayoutDashboard;