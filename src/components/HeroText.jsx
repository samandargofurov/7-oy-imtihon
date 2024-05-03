import { NavLink } from 'react-router-dom'
import Button from './Button'

function HeroText() {

  return (
    <>
        <div>
            <p className="uppercase text-[#D87D4A] mb-5 tracking-[10px]">
            new product
            </p>
            <h1 className="w-[396px] font-semibold text-[56px] leading-none uppercase">
            xx99 mark | headphones
            </h1>
            <p className="text-[15px] opacity-60 w-[430px] mt-6">
            The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
            </p>
            <NavLink to='/about/xx99-mark-two-headphones'><Button></Button></NavLink>
        </div>
    </>
  )
}

export default HeroText