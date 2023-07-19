import Nav from "../components/elements/Nav"
import NavLogo from "../components/fragments/NavLogo"
import NavBrand from "../components/fragments/NavBrand"

export const metadata = {
  title: "NotesApp | Login",
  description: "Notes App Login Page",
}

const LayoutLogin = ({ children }: any) => {
  return (
    <>
      <Nav>
        <NavLogo />
        <NavBrand link="/" />
      </Nav>
      {children}
    </>
  );
};

export default LayoutLogin;