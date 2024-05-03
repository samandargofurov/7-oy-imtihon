// import React, { useEffect, useState } from "react";
// import xx99mark2 from '../assets/product-xx99-mark-two-headphones/pageheadphone.jpg'
// import smallsizeheadphone from '../assets/product-yx1-earphones/smallsizeheadphone.jpg'
// import swagg from '../assets/product-yx1-earphones/swagg.jpg'
// import humanclone from '../assets/product-yx1-earphones/humanclone.jpg'
// import xx99Mark1 from '../assets/product-yx1-earphones/xx99Mark1.jpg'
// import zx9 from '../assets/product-yx1-earphones/zx9.jpg'
// import xx59 from '../assets/product-yx1-earphones/xx59.jpg'
// import { NavLink, useParams } from "react-router-dom";
// import Card from "../components/Card"
// import Button from "../components/Button";

// function Details() {
//   const [data, setData] = useState(null);
//   const params = useParams();

//   useEffect(() => {
//     fetch(`http://localhost:3000/${params.id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [params.id]);

//   return (
//     <>
//       <div className="container w-[1109px] mx-auto">
//         <p className="pt-20 opacity-55 font-semibold">
//           <NavLink to="/">Go Back</NavLink>
//         </p>
//         <div className="flex justify-between items-center gap-20 mt-20">
//           <img src={xx99mark2} alt="" />
//           {data && (
//             <div>
//               <div className="text-black flex flex-col justify-center">
//                 <div className="text-[#D87A4D] uppercase text-lg tracking-[10px] mb-4">
//                   {data.new ? 'new product' : ''}
//                 </div>
//                 <div className="text-black leading-16 uppercase text-5xl font-semibold mb-8 w-96">
//                   {data.name}
//                 </div>
//                 <div className="text-black mb-8">{data.description}</div>
//                 <p className="font-bold text-2xl">$ {data.price / 1000}</p>
//                 <div className="flex gap-8 mt-[47px]">
//                   <div className="w-[120px] h-[48px] bg-[#F1F1F1] flex items-center justify-evenly">
//                     <p className="text-black opacity-40 cursor-pointer font-bold hover:text-[#D87D4A]">
//                       -
//                     </p>
//                     <p className="text-black font-semibold">1</p>
//                     <p className="text-black opacity-40 cursor-pointer font-bold hover:text-[#D87D4A]">
//                       +
//                     </p>
//                   </div>
//                   <button className="w-[160px] h-[48px] bg-[#D87D4A] flex justify-center items-center text-white uppercase font-semibold">
//                     add to cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//         <div>{data && (
//             <div>
//                 <div className="flex gap-36 mt-[160px]">
//                     <div className="flex flex-col gap-8">
//                     <h1 className="uppercase text-[32px] font-semibold">features</h1>
//                     <div className="flex flex-col gap-7 w-[635px]">
//                         <p className="opacity-80">{data.features}</p>
//                     </div>
//                     </div>
                
//                     <div className="flex flex-col items-start gap-6">
//                     <h2 className="uppercase text-[32px] font-semibold">in the box</h2>
//                     <div className="flex flex-col gap-2">
//                         <div className="text-[#D87D4A] flex gap-6 font-semibold">{data.includes.quantity}x<span className=" font-normal opacity-70 text-black">{data.includes.item}</span></div>
//                         <div className="text-[#D87D4A] flex gap-6 font-semibold">{data.includes.quantity}x<span className=" font-normal opacity-70 text-black">{data.includes.item}</span></div>
//                         <div className="text-[#D87D4A] flex gap-6 font-semibold">{data.includes.quantity}x<span className=" font-normal opacity-70 text-black">{data.includes.item}</span></div>
//                         <div className="text-[#D87D4A] flex gap-6 font-semibold">{data.includes.quantity}x<span className=" font-normal opacity-70 text-black">{data.includes.item}</span></div>
//                         <div className="text-[#D87D4A] flex gap-6 font-semibold">{data.includes.quantity}x<span className=" font-normal opacity-70 text-black">{data.includes.item}</span></div>
//                     </div>
//                     </div>
//                 </div>

//                 <div className="flex gap-8 mt-[160px] mb-[160px]">
//                     <div className="flex gap-8 flex-col">
//                         <div><img src={humanclone} alt="" /></div>
//                         <img src={swagg} alt="" />
//                     </div>
//                     <div>
//                         <img src={smallsizeheadphone} alt="" />
//                     </div>
//                 </div>

//                 <div className="mb-[160px]">
//                     <h1 className="uppercase text-3xl font-bold text-center">you may also like</h1>
//                     <div className="flex justify-between mt-16">
//                         <div className="flex flex-col gap-8 items-center">
//                             <img src={xx99Mark1} alt="" width={320} height={280} />
//                             <div className="flex flex-col items-center justify-center">
//                             <h3 className="text-black font-semibold text-center text-2xl">XX99 MARK I</h3>
//                             <NavLink to='/about/xx99-mark-one-headphones'><Button></Button></NavLink>
//                             </div>
//                         </div>
//                         <div className="flex flex-col gap-8 items-center">
//                             <img src={xx59} alt="" width={320} height={280} />
//                             <div className="flex flex-col items-center justify-center">
//                             <h3 className="text-black font-semibold text-center text-2xl">XX59</h3>
//                             <NavLink to='/about/xx59-headphones'><Button></Button></NavLink>
//                             </div>
//                         </div>
//                         <div className="flex flex-col gap-8 items-center">
//                             <img src={zx9} alt="" width={320} height={280} />
//                             <div className="flex flex-col items-center justify-center">
//                             <h3 className="text-black font-semibold text-center text-2xl">ZX9 SPEAKER</h3>
//                             <NavLink to='/about/zx9-speaker'><Button></Button></NavLink>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <Card></Card>
//             </div>
//         )}</div>
//       </div>
//     </>
//   );
// }

// export default Details;



import React, { useEffect, useState } from "react";
import xx99mark2 from '../assets/product-xx99-mark-two-headphones/pageheadphone.jpg'
import smallsizeheadphone from '../assets/product-yx1-earphones/smallsizeheadphone.jpg'
import swagg from '../assets/product-yx1-earphones/swagg.jpg'
import humanclone from '../assets/product-yx1-earphones/humanclone.jpg'
import xx99Mark1 from '../assets/product-yx1-earphones/xx99Mark1.jpg'
import zx9 from '../assets/product-yx1-earphones/zx9.jpg'
import xx59 from '../assets/product-yx1-earphones/xx59.jpg'
import { NavLink, useParams } from "react-router-dom";
import Card from "../components/Card"
import Button from "../components/Button";

function Details() {
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  return (
    <>
      <div className="container w-[1109px] mx-auto">
        <p className="pt-20 opacity-55 font-semibold">
          <NavLink to="/">Go Back</NavLink>
        </p>
        <div className="flex justify-between items-center gap-20 mt-20">
          <img id="mainImage" src={xx99mark2} alt="" />
          {data && (
            <div>
              <div className="text-black flex flex-col justify-center">
                <div className="text-[#D87A4D] uppercase text-lg tracking-[10px] mb-4">
                  {data.new ? 'new product' : ''}
                </div>
                <div className="text-black leading-16 uppercase text-5xl font-semibold mb-8 w-96">
                  {data.name}
                </div>
                <div className="text-black mb-8">{data.description}</div>
                <p className="font-bold text-2xl">$ {data.price / 10}</p>
                <div className="flex gap-8 mt-[47px]">
                  <div className="w-[120px] h-[48px] bg-[#F1F1F1] flex items-center justify-evenly">
                    <p className="text-black opacity-40 cursor-pointer font-bold hover:text-[#D87D4A]">
                      -
                    </p>
                    <p className="text-black font-semibold">1</p>
                    <p className="text-black opacity-40 cursor-pointer font-bold hover:text-[#D87D4A]">
                      +
                    </p>
                  </div>
                  <button onClick={handleClick} className="w-[160px] h-[48px] bg-[#D87D4A] flex justify-center items-center text-white uppercase font-semibold">
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>{data && (
            <div>
                <div className="flex gap-36 mt-[160px]">
                    <div className="flex flex-col gap-8">
                    <h1 className="uppercase text-[32px] font-semibold">features</h1>
                    <div className="flex flex-col gap-7 w-[635px]">
                        <p className="opacity-80">{data.features}</p>
                    </div>
                    </div>
                
                    <div className="flex flex-col items-start gap-6">
                    <h2 className="uppercase text-[32px] font-semibold">in the box</h2>
                    <div className="flex flex-col gap-2">
                        <div className="text-[#D87D4A] flex gap-6 font-semibold">{data.includes.quantity}x<span className=" font-normal opacity-70 text-black">{data.includes.item}</span></div>
                        <div className="text-[#D87D4A] flex gap-6 font-semibold">{data.includes.quantity}x<span className=" font-normal opacity-70 text-black">{data.includes.item}</span></div>
                        <div className="text-[#D87D4A] flex gap-6 font-semibold">{data.includes.quantity}x<span className=" font-normal opacity-70 text-black">{data.includes.item}</span></div>
                        <div className="text-[#D87D4A] flex gap-6 font-semibold">{data.includes.quantity}x<span className=" font-normal opacity-70 text-black">{data.includes.item}</span></div>
                        <div className="text-[#D87D4A] flex gap-6 font-semibold">{data.includes.quantity}x<span className=" font-normal opacity-70 text-black">{data.includes.item}</span></div>
                    </div>
                    </div>
                </div>

                <div className="flex gap-8 mt-[160px] mb-[160px]">
                    <div className="flex gap-8 flex-col">
                        <div><img src={humanclone} alt="" /></div>
                        <img src={swagg} alt="" />
                    </div>
                    <div>
                        <img src={smallsizeheadphone} alt="" />
                    </div>
                </div>

                <div className="mb-[160px]">
                    <h1 className="uppercase text-3xl font-bold text-center">you may also like</h1>
                    <div className="flex justify-between mt-16">
                        <div className="flex flex-col gap-8 items-center">
                            <img src={xx99Mark1} alt="" width={320} height={280} />
                            <div className="flex flex-col items-center justify-center">
                            <h3 className="text-black font-semibold text-center text-2xl">XX99 MARK I</h3>
                            <NavLink to='/about/xx99-mark-one-headphones'><Button></Button></NavLink>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8 items-center">
                            <img src={xx59} alt="" width={320} height={280} />
                            <div className="flex flex-col items-center justify-center">
                            <h3 className="text-black font-semibold text-center text-2xl">XX59</h3>
                            <NavLink to='/about/xx59-headphones'><Button></Button></NavLink>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8 items-center">
                            <img src={zx9} alt="" width={320} height={280} />
                            <div className="flex flex-col items-center justify-center">
                            <h3 className="text-black font-semibold text-center text-2xl">ZX9 SPEAKER</h3>
                            <NavLink to='/about/zx9-speaker'><Button></Button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                <Card></Card>
            </div>
        )}</div>
      </div>
    </>
  );
}

export default Details;
