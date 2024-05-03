import React, { useEffect, useState } from "react";
import xx99mark2 from "../assets/product-xx99-mark-two-headphones/pageheadphone.jpg";
import smallsizeheadphone from "../assets/product-yx1-earphones/smallsizeheadphone.jpg";
import swagg from "../assets/product-yx1-earphones/swagg.jpg";
import zx7 from "../assets/product-yx1-earphones/zx7.jpg";
import earphone from "../assets/product-yx1-earphones/earphones.jpg";
import humanclone from "../assets/product-yx1-earphones/humanclone.jpg";
import xx99Mark1 from "../assets/product-yx1-earphones/xx99Mark1.jpg";
import zx9 from "../assets/product-yx1-earphones/zx9.jpg";
import xx59 from "../assets/product-yx1-earphones/xx59.jpg";

import zx9two from "../assets/product-xx99-mark-two-headphones/twozx9.jpg"
import zx9home from "../assets/product-xx99-mark-two-headphones/standzx9tohome.jpg"
import zx9largesize from "../assets/product-xx99-mark-two-headphones/zx9largesizecolonka.jpg"

import zx7big from "../assets/product-xx99-mark-two-headphones/zx7big.jpg"
import zx7largesize from "../assets/product-xx99-mark-two-headphones/zx7largesize.jpg"
import zx7man from "../assets/product-xx99-mark-two-headphones/zx7man.jpg"

import yx1charging from "../assets/product-xx99-mark-two-headphones/yx1charging.jpg"
import yx1twothings from "../assets/product-xx99-mark-two-headphones/yx1twothings.jpg"
import yx1largesize from "../assets/product-xx99-mark-two-headphones/yx1largesize.jpg"

import mark1collaps from "../assets/product-xx99-mark-two-headphones/mark1collaps.jpg"
import mark1collaps2withwatch from "../assets/product-xx99-mark-two-headphones/mark1collaps2withwatch.jpg"
import mark1largepicture from "../assets/product-xx99-mark-two-headphones/mark1largepicture.jpg"

import xx59woman from "../assets/product-xx99-mark-two-headphones/xx59woman.jpg"
import xx59fingure from "../assets/product-xx99-mark-two-headphones/xx59fingure.jpg"
import xx59book from "../assets/product-xx99-mark-two-headphones/Bitmap-1.jpg"


import { NavLink, useParams } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";
import { saveProduct } from "../redux/addedSlice";

function Details() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params.id]);

  function handleSave() {
    dispatch(saveProduct(data.name, data.price, data.counter))
  }

  function handleIncrement() {
    dispatch(increment(1));
  }

  function handleDecrement() {
    dispatch(decrement(1));
  }

  return (
    <>
      <div className="container w-[1109px] mx-auto">
        {loading && (
          <span className="loading loading-ring loading-lg block mx-auto mt-60"></span>
        )}
        {!loading && (
          <>
            <p className="pt-20 opacity-55 font-semibold">
              <NavLink to="/">Go Back</NavLink>
            </p>
            <div className="flex justify-between items-center gap-20 mt-20">
              <img src={
                params.id == 'xx99-mark-two-headphones' && xx99mark2  ||
                params.id == 'zx9-speaker' && zx9  ||
                params.id == 'zx7-speaker' && zx7  ||
                params.id == 'yx1-earphones' && earphone  ||
                params.id == 'xx99-mark-one-headphones' && xx99Mark1  ||
                params.id == 'xx59-headphones' && xx59  
              } alt="" />
              {data && (
                <div>
                  <div className="text-black flex flex-col justify-center">
                    <div className="text-[#D87A4D] uppercase text-lg tracking-[10px] mb-4">
                      {data.new ? "new product" : ""}
                    </div>
                    <div className="text-black leading-16 uppercase text-5xl font-semibold mb-8 w-96">
                      {data.name}
                    </div>
                    <div className="text-black mb-8">{data.description}</div>
                    <p className="font-bold text-2xl">$ {data.price * counter}</p>
                    <div className="flex gap-8 mt-[47px]">
                      <div className="w-[120px] h-[48px] bg-[#F1F1F1] flex items-center justify-evenly">
                        <button onClick={handleDecrement}>-</button>
                          <h1 className="text-black font-semibold">{counter}</h1>
                        <button onClick={handleIncrement}>+</button>
                      </div>
                      <button onClick={handleSave} className="w-[160px] h-[48px] bg-[#D87D4A] flex justify-center items-center text-white uppercase font-semibold">
                        add to cart
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div>
              {data && (
                <div>
                  <div className="flex gap-36 mt-[160px]">
                    <div className="flex flex-col gap-8">
                      <h1 className="uppercase text-[32px] font-semibold">
                        features
                      </h1>
                      <div className="flex flex-col gap-7 w-[635px]">
                        <p className="opacity-80">{data.features}</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-6">
                      <h2 className="uppercase text-[32px] font-semibold">
                        in the box
                      </h2>
                      {
                        data.includes.map((el, index) => {
                          return (
                            <div key={index} className="flex flex-col">
                              <div className="text-[#D87D4A] flex gap-4 font-semibold">
                                {el.quantity}x
                                <span className=" font-normal opacity-70 text-black">
                                  {el.item}
                                </span>
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>

                  <div className="flex gap-8 mt-[160px] mb-[160px]">
                    <div className="flex gap-8 flex-col">
                      <div>
                        <img src={
                          params.id == 'xx99-mark-two-headphones' && humanclone  ||
                          params.id == 'zx9-speaker' && zx9largesize ||
                          params.id == 'zx7-speaker' && zx7largesize  ||
                          params.id == 'yx1-earphones' && yx1twothings  ||
                          params.id == 'xx99-mark-one-headphones' && mark1collaps  ||
                          params.id == 'xx59-headphones' && xx59woman
                        } alt="" />
                      </div>
                      <img src={
                        params.id == 'xx99-mark-two-headphones' && swagg ||
                        params.id == 'zx9-speaker' && zx9home ||
                        params.id == 'zx7-speaker' && zx7man  ||
                        params.id == 'yx1-earphones' && yx1charging  ||
                        params.id == 'xx99-mark-one-headphones' && mark1collaps2withwatch  ||
                        params.id == 'xx59-headphones' && xx59book
                      } alt="" />
                    </div>
                    <div>
                      <img src={
                        params.id == 'xx99-mark-two-headphones' && smallsizeheadphone ||
                        params.id == 'zx9-speaker' && zx9two ||
                        params.id == 'zx7-speaker' &&  zx7big ||
                        params.id == 'yx1-earphones' && yx1largesize  ||
                        params.id == 'xx99-mark-one-headphones' && mark1largepicture  ||
                        params.id == 'xx59-headphones' && xx59fingure
                      } alt="" />
                    </div>
                  </div>

                  <div className="mb-[160px]">
                    <h1 className="uppercase text-3xl font-bold text-center">
                      you may also like
                    </h1>
                    <div className="flex justify-between mt-16">
                      <div className="flex flex-col gap-8 items-center">
                        <img src={
                          params.id == 'xx99-mark-two-headphones' && xx99Mark1 ||
                          params.id == 'zx9-speaker' && zx7 ||
                          params.id == 'zx7-speaker' &&  zx9 ||
                          params.id == 'yx1-earphones' && xx99Mark1  ||
                          params.id == 'xx99-mark-one-headphones' && xx99mark2  ||
                          params.id == 'xx59-headphones' && xx99mark2
                        } alt="" width={320} height={280} />
                        <div className="flex flex-col items-center justify-center">
                          <h3 className="text-black font-semibold text-center text-2xl">
                          {
                            params.id == 'xx99-mark-two-headphones' && 'XX99 MARK I' ||
                            params.id == 'zx9-speaker' && 'ZX7 SPEAKER' ||
                            params.id == 'zx7-speaker' &&  'ZX9 SPEAKER' ||
                            params.id == 'yx1-earphones' && 'XX99 MARK I'  ||
                            params.id == 'xx99-mark-one-headphones' && 'XX99 MARK II'  ||
                            params.id == 'xx59-headphones' && 'XX99 MARK II'
                          }
                          </h3>
                          <NavLink to='x99-mark-two-headphones'>
                            <Button></Button>
                          </NavLink>
                        </div>
                      </div>
                      <div className="flex flex-col gap-8 items-center">
                        <img src={
                          params.id == 'xx99-mark-two-headphones' && xx59 ||
                          params.id == 'zx9-speaker' && xx99Mark1 ||
                          params.id == 'zx7-speaker' &&  xx99Mark1 ||
                          params.id == 'yx1-earphones' && xx59  ||
                          params.id == 'xx99-mark-one-headphones' && xx59  ||
                          params.id == 'xx59-headphones' && xx99Mark1
                        } alt="" width={320} height={280} />
                        <div className="flex flex-col items-center justify-center">
                          <h3 className="text-black font-semibold text-center text-2xl">
                          {
                            params.id == 'xx99-mark-two-headphones' && 'XX59' ||
                            params.id == 'zx9-speaker' && 'XX99 MARK I' ||
                            params.id == 'zx7-speaker' &&  'XX99 MARK I' ||
                            params.id == 'yx1-earphones' && 'XX59'  ||
                            params.id == 'xx99-mark-one-headphones' && 'XX59'  ||
                            params.id == 'xx59-headphones' && 'XX99 MARK I'
                          }
                          </h3>
                          <NavLink to={`/about/${params.id}`}>
                            <Button></Button>
                          </NavLink>
                        </div>
                      </div>
                      <div className="flex flex-col gap-8 items-center">
                        <img src={
                          params.id == 'xx99-mark-two-headphones' && zx9 ||
                          params.id == 'zx9-speaker' && xx59 ||
                          params.id == 'zx7-speaker' &&  xx59 ||
                          params.id == 'yx1-earphones' && zx9  ||
                          params.id == 'xx99-mark-one-headphones' && zx9  ||
                          params.id == 'xx59-headphones' && zx9
                        } alt="" width={320} height={280} />
                        <div className="flex flex-col items-center justify-center">
                          <h3 className="text-black font-semibold text-center text-2xl">
                          {
                            params.id == 'xx99-mark-two-headphones' && 'ZX9 SPEAKER' ||
                            params.id == 'zx9-speaker' && 'XX59' ||
                            params.id == 'zx7-speaker' &&  'XX59' ||
                            params.id == 'yx1-earphones' && 'ZX9 SPEAKER'  ||
                            params.id == 'xx99-mark-one-headphones' && 'ZX9 SPEAKER'  ||
                            params.id == 'xx59-headphones' && 'ZX9 SPEAKER'
                          }
                          </h3>
                          <NavLink to={`/about/${params.id}`}>
                            <Button></Button>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Card></Card>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Details;
