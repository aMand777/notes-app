const Nav = ({ children }: any) => {
  return (
      <nav className="w-screen h-10 flex items-center bg-primary">
      {children}
      </nav>
  );
};

export default Nav;
