import { useDispatch, useSelector } from "react-redux";
import img from "../assets/audiophile.svg";
import yx1 from "../assets/product-yx1-earphones/yx1.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { decrement, increment } from "../redux/counterSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const saveProducts = useSelector((state) => state.savedItem)
  console.log(saveProducts);

  function handleLogin() {
    navigate("/login");
  }

  function handleIncrement() {
    dispatch(increment(1));
  }

  function handleDecrement() {
    dispatch(decrement(1));
  }

  return (
    <>
      <div className="bg-[#141414]">
        <div className="containe w-[1109px] mx-auto text-white bg-['#141414'] pt-5">
          <div className="navbar p-0">
            <div className="navbar-start">
              <NavLink to="/" className="text-3xl font-extrabold">
                <img src={img} alt="" />
              </NavLink>
            </div>

            <div className="navbar-center">
              <ul className="flex gap-10 text-sm">
                <li className="hover:text-[#D87D4A] text-white">
                  <NavLink to="/">HOME</NavLink>
                </li>
                <li className="hover:text-[#D87D4A] text-white">
                  <NavLink to="/headphones">HEADPHONES</NavLink>
                </li>
                <li className="hover:text-[#D87D4A] text-white">
                  <NavLink to="/speakers">SPEAKERS</NavLink>
                </li>
                <li className="hover:text-[#D87D4A] text-white">
                  <NavLink to="/earphones">EARPHONES</NavLink>
                </li>
              </ul>
            </div>

            <div className="navbar-end flex gap-5">
              <div className="flex-none">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle"
                  >
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
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
                  <div
                    tabIndex={0}
                    className="mt-8 z-[1] card card-compact dropdown-content w-[440px] bg-white text-black shadow-2xl"
                  >
                    <div className="card-body bg-white">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg">CART (3)</span>
                        <button className="hover:underline opacity-60">
                          Remove all
                        </button>
                      </div>
                      <div className="mt-">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-6">
                            <img
                              src={yx1}
                              alt=""
                              className="rounded-xl"
                              width={70}
                              height={70}
                            />
                            <div className="flex flex-col gap-1">
                              <h1 className="text-md font-bold">{saveProducts}</h1>
                              <p className="text-sm font-semibold opacity-55">
                                $ {saveProducts}
                              </p>
                            </div>
                          </div>
                          <div className="w-[120px] h-[38px] bg-[#F1F1F1] flex items-center justify-evenly">
                            <button onClick={handleDecrement}>-</button>
                            <h1 className="text-black font-semibold">
                              {counter}
                            </h1>
                            <button onClick={handleIncrement}>+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleLogin}
                  className="btn btn-xs btn-outline btn-info"
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

export default Header;
