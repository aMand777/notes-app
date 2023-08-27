import Nav from "../elements/Nav"
import NavLogo from "../fragments/NavLogo"
import NavBrand from "../fragments/NavBrand"
import NavUsers from "../fragments/NavUsers"

const Navbar = () => {
  return (
    <>
    <Nav>
      <NavLogo />
      <NavBrand />
      <NavUsers />
    </Nav>
    </>
  )
}

export default Navbar