import Nav from '../components/elements/Nav'
import NavLogo from '../components/fragments/NavLogo'
import NavBrand from '../components/fragments/NavBrand'

export const metadata = {
  title: 'NotesApp | Signup',
  description: 'Notes App Signup Page',
}

const LayoutSignup = ({ children }: any) => {
  return (
    <>
      <Nav>
        <NavLogo link="/" />
        <NavBrand link="/" />
      </Nav>
      {children}
    </>
  );
};

export default LayoutSignup;