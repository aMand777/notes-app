import NavHome from "../components/elements/NavHome"
import NavLogo from "../components/fragments/NavLogo"
import NavBrand from "../components/fragments/NavBrand"

export const metadata = {
  title: "NotesApp | Login",
  description: "Notes App Login Page",
}

const LayoutLogin = ({ children }: any) => {
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

export default LayoutLogin;