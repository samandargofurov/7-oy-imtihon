import image from "../assets/product-yx1-earphones/Bitmap.jpg";
import speakers from "../assets/product-yx1-earphones/image-removebg-preview(38).svg"
import zx7 from "../assets/product-yx1-earphones/zx7speakers.jpg"
import borderLine from "../assets/product-yx1-earphones/borderLine.svg"
import earphone from '../assets/product-yx1-earphones/earphones.jpg'
import Button from "../components/Button";
import Card from "../components/Card";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import DescProduct from "../components/DescProduct";
import Button2 from "../components/Button2";

function Home() {
  return (
    <>
      <div className="bg-[#131313]">
        <div className="container w-[1109px] mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-white">
              <p className="uppercase text-[#898989] mb-5 tracking-[10px]">
                new product
              </p>
              <h1 className="w-[396px] font-semibold text-[56px] leading-none uppercase">
                XX99 Mark II Headphones
              </h1>
              <p className="text-[15px] mt-6 w-[349px]">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <NavLink to='/headphones'><Button></Button></NavLink>
            </div>

            <div className="flex justify-end">
              <img
                src={image}
                alt=""
                className="bg-[#141414] w-[610px] h-[544px] mt-3 border-green-600"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container w-[1109px] mx-auto">
        <div><Card></Card></div>

        <div className="bg-[#D87D4A] h-[560px] relative rounded-xl mt-[168px] mb-12">
          <div className="flex justify-between">
            <div>
              <img src={borderLine} alt="" className="absolute" />
              <img src={speakers} alt="" className="absolute pt-24 pl-28" />
            </div>
            <div className="flex justify-center mt-[130px] mr-20">
              <div className="flex flex-col gap-6">
                <h1 className="text-[56px] leading-none font-semibold text-white flex flex-col">ZX9 <span>SPEAKER</span></h1>
                <p className="w-[349px] mt-6 text-white">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <NavLink><Button2></Button2></NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="absolute z-[1] pl-24 pt-28">
            <h1 className="uppercase text-4xl font-semibold">zx7 speaker</h1>
            <NavLink><Button2></Button2></NavLink>
          </div>
          <img src={zx7} alt="" className="rounded-xl relative" />
        </div>
        <div className="flex justify-between">
          <img src={earphone} alt="" />
          <div className="w-[540px] h-[320px] flex justify-center items-center bg-[#F1F1F1]">
            <div className="flex flex-col items-baseline mr-36">
              <h1 className="text-3xl font-semibold">YX1 EARPHONES</h1>
              <NavLink><Button2></Button2></NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-[160px]">
      <DescProduct></DescProduct>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
