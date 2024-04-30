import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="bg-[#141414]">
        <div className="containe w-[1109px] mx-auto text-white bg-['#141414']">
          <div className="navbar p-0">
            <div className="navbar-start">
              <NavLink to="/" className="text-3xl font-extrabold">
                audiophile
              </NavLink>
            </div>

            <div className="navbar-center">
              <ul className="flex gap-10">
                <li className="hover:text-[#D87D4A]">
                  <NavLink to="/">HOME</NavLink>
                </li>
                <li className="hover:text-[#D87D4A]">
                  <NavLink to="/headphones">HEADPHONES</NavLink>
                </li>
                <li className="hover:text-[#D87D4A]">
                  <NavLink to="/speakers">SPEAKERS</NavLink>
                </li>
                <li className="hover:text-[#D87D4A]">
                  <NavLink to="/earphones">EARPHONES</NavLink>
                </li>
              </ul>
            </div>

            <div className="navbar-end flex gap-2">
              <div className="indicator cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
