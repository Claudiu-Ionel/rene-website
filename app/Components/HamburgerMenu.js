function HamburgerMenu({ setSidebarOpen, sidebarOpen }) {
  const toggleMenu = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      id="hamburger-menu"
      className={`flex items-start relative w-fit h-[55px] bg-white px-3 py-2 relative cursor-pointer ${
        sidebarOpen ? "open" : ""
      }`}
    >
      {!sidebarOpen && (
        <div
          className="hamburger-icon flex p-[10px] w-[50px] h-full bg-transparent flex-col justify-between relative "
          onClick={toggleMenu}
        >
          <div className="bar w-[30px] h-[3px] bg-[#333]"></div>
          <div className="bar w-[30px] h-[3px] bg-[#333]"></div>
          <div className="bar w-[30px] h-[3px] bg-[#333]"></div>
        </div>
      )}
      {sidebarOpen && (
        <div
          className="flex p-[10px] w-[50px] h-full bg-transparent flex-col justify-between relative"
          onClick={toggleMenu}
        >
          <div className="bar w-[30px] h-[3px] bg-[#333] origin-center rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="bar w-[30px] h-[3px] bg-[#333] origin-center -rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
