import NavHome from "../components/elements/NavHome"
import NavLogo from "../components/fragments/NavLogo"
import NavBrand from "../components/fragments/NavBrand"

export const metadata = {
  title: "NotesApp | Signup",
  description: "Notes App Signup Page"
}

const LayoutSignup = ({ children }: any) => {
  return (
    <>
      <NavHome>
        <NavLogo />
        <NavBrand link="/" />
      </NavHome>
      {children}
    </>
  );
};

export default LayoutSignup