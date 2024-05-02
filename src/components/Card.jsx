import path from "../assets/Path2.svg";
import { NavLink } from "react-router-dom";
import headphones from "../assets/product-yx1-earphones/image-removebg-preview(41).svg";
import speakers from "../assets/product-yx1-earphones/image-removebg-preview(38.2).svg"
import earphones from "../assets/product-yx1-earphones/earphones.svg"

function Card() {
  return (
    <>
      <div className="container w-[1109px] mx-auto">
        <div className="flex justify-between mt-20">
          <div className="block">
            <div className="absolute z-10 pl-[88px]"><img src={headphones} alt="" /></div>
            <div className="flex flex-col gap-3 pt-20 mt-20 justify-center items-center bg-[#F1F1F1] w-[300px] h-[180px] rounded-lg">
              <div className="uppercase font-medium text-lg">headphones</div>
              <NavLink className='flex gap-3 transition duration-500 hover:translate-x-3'>
                <div className="uppercase font-medium opacity-60">shop</div>
                <img src={path} alt="" />
              </NavLink>
            </div>
          </div>

          <div className="block">
            <div className="absolute z-10 pl-[88px]"><img src={speakers} alt="" /></div>
            <div className="flex flex-col gap-3 pt-20 mt-20 justify-center items-center bg-[#F1F1F1] w-[300px] h-[180px] rounded-lg">
              <div className="uppercase font-medium text-lg">speakers</div>
              <NavLink className='flex gap-3 transition duration-500 hover:translate-x-3'>
                <div className="uppercase font-medium opacity-60">shop</div>
                <img src={path} alt="" />
              </NavLink>
            </div>
          </div>

          <div className="block">
            <div className="absolute z-10 pl-[88px]"><img src={earphones} alt="" /></div>
            <div className="flex flex-col gap-3 pt-20 mt-20 justify-center items-center bg-[#F1F1F1] w-[300px] h-[180px] rounded-lg">
              <div className="uppercase font-medium text-lg">earphones</div>
              <NavLink className='flex gap-3 transition duration-500 hover:translate-x-3'>
                <div className="uppercase font-medium opacity-60">shop</div>
                <img src={path} alt="" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
