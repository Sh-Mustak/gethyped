import { useEffect, useState } from "react";
import Logo from "../../assets/logo.svg";
import GetResultsBtn from "../UI/GetResultsBtn";

const menuItems = ["Expertises", "Work", "About", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Scroll lock when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <style>{`
        @keyframes bouncyDrop {
          0%   { transform: translateY(-100%); opacity: 0; }
          55%  { transform: translateY(12px);  opacity: 1; }
          70%  { transform: translateY(-8px); }
          82%  { transform: translateY(5px); }
          91%  { transform: translateY(-3px); }
          100% { transform: translateY(0px); opacity: 1; }
        }

        .overlay-bounce {
          animation: bouncyDrop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes itemFadeUp {
          0%   { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0);    opacity: 1; }
        }

        .menu-item-animate {
          animation: itemFadeUp 0.35s ease forwards;
          opacity: 0;
        }
      `}</style>

      {/* ─── Main Navbar ─── */}
      <nav
        className="w-full py-4 px-4 lg:px-10 mt-1.5 flex items-center justify-between relative z-50"
        style={{
          backgroundColor: isOpen ? "transparent" : "",
          transition: "background-color 0.3s ease",
        }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="logo"
            className="h-13 sm:h-14 md:h-16 lg:h-19 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <div className="flex justify-center flex-1">
          <div className="hidden md:flex items-center justify-center bg-white rounded-[15px] px-6 h-14 min-w-[390px] gap-9 text-[18px] font-medium">
            {menuItems.map((item) => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Button + Mobile Hamburger/Close */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <GetResultsBtn bgColor="#ff9bf7" textColor="#000" />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-12 h-12 rounded-xl text-2xl transition-all duration-300"
            style={{
              backgroundColor: isOpen ? "#fffff" : "#ff9bf7",
              color: isOpen ? "#000" : "#fff",
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* ─── Mobile Overlay (starts below navbar with margin/padding gap) ─── */}
      {isOpen && (
        <div
          key={isOpen}
          className="overlay-bounce fixed left-0 right-0 bottom-0 z-40 flex flex-col items-center justify-center gap-6 md:hidden rounded-2xl"
          style={{
            backgroundColor: "#ff9bf7",
            top: "0",
            maxWidth: "96dvw",
            maxHeight: "96dvh",
            margin: "auto",
          }}
        >
          {menuItems.map((item, index) => (
            <a
              key={item}
              href="#"
              onClick={() => setIsOpen(false)}
              className="menu-item-animate bg-white text-black text-2xl font-semibold rounded-2xl px-16 py-4 text-center"
              style={{
                animationDelay: `${0.15 + index * 0.07}s`,
                minWidth: "220px",
              }}
            >
              {item}
            </a>
          ))}

          <div
            className="menu-item-animate"
            style={{ animationDelay: `${0.15 + menuItems.length * 0.07}s` }}
          >
            <GetResultsBtn bgColor="#000000" textColor="#ffffff" />
          </div>
        </div>
      )}
    </>
  );
}
