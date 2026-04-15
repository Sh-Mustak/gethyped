import Logo from "../../assets/logo.svg"; // use your logo

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 mt-1.5 flex items-center justify-between">
      {/* Left - Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="h-19 w-auto" />
      </div>

      {/* Center - Menu */}
      <div className="flex justify-center flex-1">
        <div className="hidden md:flex items-center justify-center bg-white rounded-[15px] px-6 h-14 min-w-[390px] gap-9 text-[18px] font-medium">
          <a href="#">Expertises</a>
          <a href="#">Work</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>

      {/* Right - Button */}
      <div>
        <button className="flex justify-between items-center gap-2 bg-[#ff9bf7ad] hover:bg-[#ff9bf7] text-black font-semibold px-4 py-2 rounded-xl">
          Get Results
          <span className="bg-white rounded-md p-2">🔥</span>
        </button>
      </div>
    </nav>
  );
}
