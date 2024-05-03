import zx7 from "../assets/product-xx99-mark-two-headphones/zx7big.jpg";
import { NavLink } from "react-router-dom";

function Checkout() {
  return (
    <>
      <div className="container w-[1109px] mx-auto p-0">
        <p className="pt-20 opacity-55 font-semibold">
          <NavLink to="/">Go Back</NavLink>
        </p>

        <div className="flex gap-10 mt-10">
          <div className="shadow-2xl w-[750px] rounded-lg p-12">
            <h1 className="uppercase font-semibold text-4xl mb-10">checkout</h1>
            <div className="flex flex-col gap-20">
              <div>
                <p className="text-[#D87D4A] uppercase text-xl font-semibold">
                  Billing Details
                </p>
                <div className="flex gap-4 mt-7 mb-7">
                  <label
                    htmlFor="name"
                    className="flex flex-col gap-2 font-bold"
                  >
                    Name
                    <input
                      type="text"
                      placeholder="Alexei Ward"
                      className="input input-bordered font-light w-[309px] max-w-xs"
                      id="name"
                    />
                  </label>
                  <label
                    htmlFor="email"
                    className="flex flex-col gap-2 font-bold"
                  >
                    Email
                    <input
                      type="email"
                      placeholder="alexei@mail.com"
                      className="input input-bordered font-light w-[309px] max-w-xs"
                      id="email"
                    />
                  </label>
                </div>
                <label
                  htmlFor="email"
                  className="flex flex-col gap-2 font-bold"
                >
                  Phone Number
                  <input
                    type="number"
                    id="phone"
                    placeholder="+1 202-555-0136"
                    className="input input-bordered font-light w-[309px] max-w-xs"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                  />
                </label>
              </div>

              <div>
                <p className="text-[#D87D4A] uppercase text-xl font-semibold">
                  shipping info
                </p>
                <label
                  htmlFor="name"
                  className="flex flex-col mt-7 gap-2 font-bold w-full"
                >
                  Address
                  <input
                    type="text"
                    placeholder="1137 Williams Avenue"
                    className="input input-bordered font-light w-full"
                    id="name"
                  />
                </label>
                <div className="flex gap-4 mt-7 mb-7">
                  <label
                    htmlFor="name"
                    className="flex flex-col gap-2 font-bold"
                  >
                    ZIP Code
                    <input
                      type="number"
                      placeholder="10001"
                      className="input input-bordered font-light w-[309px] max-w-xs"
                      id="name"
                    />
                  </label>
                  <label
                    htmlFor="city"
                    className="flex flex-col gap-2 font-bold"
                  >
                    City
                    <input
                      type="text"
                      placeholder="New York"
                      className="input input-bordered font-light w-[309px] max-w-xs"
                      id="city"
                    />
                  </label>
                </div>
                <label
                  htmlFor="country"
                  className="flex flex-col gap-2 font-bold"
                >
                  Country
                  <input
                    type="text"
                    id="country"
                    placeholder="United States"
                    className="input input-bordered font-light w-[309px] max-w-xs"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                  />
                </label>
              </div>

              <div>
                <p className="text-[#D87D4A] uppercase text-xl font-semibold">
                  payment details
                </p>
                <div className="flex justify-between mt-7 mb-7">
                  <p className="font-bold text-md">Payment Method</p>
                  <div className="flex flex-col gap-6">
                    <div className="input input-bordered input-warning flex items-center gap-5 font-light w-[309px] max-w-xs">
                      <input
                        type="radio"
                        name="radio-6"
                        className="radio radio-warning"
                        checked
                      />
                      <p className="text-md font-semibold">e-Money</p>
                    </div>
                    <div className="input input-bordered input-warning flex items-center gap-5 font-light w-[309px] max-w-xs">
                      <input
                        type="radio"
                        name="radio-6"
                        className="radio radio-warning"
                      />
                      <p className="text-md font-semibold">Cash on Delivery</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <label
                    htmlFor="email"
                    className="flex flex-col gap-2 font-bold"
                  >
                    e-Money Number
                    <input
                      type="number"
                      id="phone"
                      placeholder="238521993"
                      className="input input-bordered font-light w-[309px] max-w-xs"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      required
                    />
                  </label>
                  <label
                    htmlFor="email"
                    className="flex flex-col gap-2 font-bold"
                  >
                    e-Money PIN
                    <input
                      type="number"
                      id="phone"
                      placeholder="6891"
                      className="input input-bordered font-light w-[309px] max-w-xs"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      required
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="shadow-2xl w-[350px] h-[612px] rounded-lg p-8">
              <p className="uppercase text-2xl font-semibold">summary</p>
              <div className="flex flex-col gap-5 mt-8">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-6">
                    <img
                      src={zx7}
                      alt=""
                      className="rounded-xl"
                      width={70}
                      height={70}
                    />
                    <div className="flex flex-col gap-1">
                      <h1 className="text-md font-bold">XX99 MK II</h1>
                      <p className="text-sm font-semibold opacity-55">
                        $ 2,999
                      </p>
                    </div>
                  </div>
                  <p className="opacity-50 font-semibold">x1</p>
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4 mt-8">
                  <div className="flex flex-col gap-2">
                    <div className=" flex justify-between">
                      <p className="font-semibold text-sm opacity-50">TOTAL</p>
                      <span className="font-bold">$ 5,396</span>
                    </div>
                    <div className=" flex justify-between">
                      <p className="font-semibold text-sm flex justify-between opacity-50">
                        SHIPPING
                      </p>
                      <span className="font-bold">$ 50</span>
                    </div>
                    <div className=" flex justify-between">
                      <p className="font-semibold text-sm flex justify-between opacity-50">
                        VAT (INCLUDED)
                      </p>
                      <span className="font-bold">$ 1,079</span>
                    </div>
                  </div>
                  <p className="font-semibold text-sm flex justify-between">
                    GRAND TOTAL <span className="text-[#D87D4A]">$ 5,446</span>
                  </p>
                </div>

                <button className="bg bg-[#d87D4A] text-white px-4 py-3 w-full items-baseline">
                  CONTINUE & PAY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
