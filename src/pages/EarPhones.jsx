import earphone from '../assets/product-yx1-earphones/yx1.jpg'
import Card from '../components/Card'
import HeroText from '../components/HeroText'

function EarPhones() {
  return (
    <>
      <div className='bg-[#141414]'>
        <div className='container w-[1109px] mx-auto'>
          <div className='h-[239px] flex justify-center items-center'>
            <h1 className='uppercase text-white text-4xl text-center font-semibold'>earphones</h1>
          </div>
        </div>
      </div>
      <div className='container w-[1109px] mx-auto'>
        <div className='flex justify-between items-center mt-20'>
          <div>
            <img src={earphone} alt="" width={540} height={560}  />
          </div>
          <div>
          <HeroText />
          </div>
        </div>

        <div className='mt-[160px]'>
        <Card></Card>
        </div>
      </div>
    </>
  )
}

export default EarPhones