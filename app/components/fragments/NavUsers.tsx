const NavUsers = () => {
  return (
    <div className="flex justify-around w-1/3">
      <div className="flex-auto w-2/3">
        <p className="w-fit text-xs font-medium ml-auto cursor-pointer">Risma Lusiana</p>
      </div>
      <span className="flex-auto w-1/3">
        <p className="text-xs italic text-center mx-auto w-fit cursor-pointer text-blue-500 hover:text-blue-600 hover:font-semibold">Logout</p>
      </span>
    </div>
  )
}

export default NavUsers