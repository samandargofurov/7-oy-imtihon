import React from 'react'
import Button from './Button'

function HeroText() {
  return (
    <>
        <div className="">
            <p className="uppercase text-[#D87D4A] mb-5 tracking-[10px]">
            new product
            </p>
            <h1 className="w-[396px] font-semibold text-[56px] leading-none uppercase">
            XX99 Mark II Headphones
            </h1>
            <p className="text-[15px] opacity-60 w-[430px] mt-6">
            The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
            </p>
            <Button></Button>
        </div>
    </>
  )
}

export default HeroText