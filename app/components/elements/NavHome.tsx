const NavHome = ({ children }: {children: React.ReactNode}) => {

  return (
    <>
      <nav className={`w-screen h-10 flex items-center bg-primary sticky top-0 left-0 z-50`}>
      {children}
      </nav>
    </>
  );
};

export default NavHome;
