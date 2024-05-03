import headphone from '../assets/product-yx1-earphones/pageheadphone.jpg'
import xx99Mark1 from '../assets/product-yx1-earphones/xx99Mark1.jpg'
import xx59 from '../assets/product-yx1-earphones/xx59.jpg'
import Card from '../components/Card'
import HeroText from '../components/HeroText'
import { NavLink } from 'react-router-dom'

function HeadPhones() {

  return (
    <>
      <div className='bg-[#141414]'>
        <div className='container w-[1109px] mx-auto'>
          <div className='h-[239px] flex justify-center items-center'>
            <h1 className='uppercase text-white text-4xl text-center font-semibold'>headphones</h1>
          </div>
        </div>
      </div>
      <div className='container w-[1109px] mx-auto'>
        <div className='flex justify-between items-center mt-20'>
          <div>
            <img src={headphone} alt="" width={540} height={560}  />
          </div>
          <div>
              <NavLink to='/about/xx99-mark-two-headphones'><HeroText /></NavLink>
          </div>
        </div>

        <div className='flex justify-between items-center mt-[160px]'>
          <div>
              <NavLink to='/about/xx99-mark-one-headphones'><HeroText /></NavLink>
          </div>
          <div>
            <img src={xx99Mark1} alt="" width={540} height={560}  />
          </div>
        </div>

        <div className='flex justify-between items-center mt-[160px]'>
          <div>
            <img src={xx59} alt="" width={540} height={560}  />
          </div>
          <div>
              <NavLink to='/about/xx59-headphones'><HeroText /></NavLink>
          </div>
        </div>

        <div className='mt-[160px]'>
        <Card></Card>
        </div>
      </div>
    </>
  )
}

export default HeadPhones