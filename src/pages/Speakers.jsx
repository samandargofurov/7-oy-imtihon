import headphone from '../assets/product-yx1-earphones/pageheadphone.jpg'
import Card from '../components/Card'
import HeroText from '../components/HeroText'
import DescProduct from '../components/DescProduct'
import Footer from '../components/Footer'

function Speakers() {
  return (
    <>
      <div className="bg-[#141414]">
        <div className="container w-[1109px] mx-auto">
          <div className="h-[239px] flex justify-center items-center">
            <h1 className="uppercase text-white text-4xl text-center font-semibold">
              speakers
            </h1>
          </div>
        </div>
      </div>
      <div className="container w-[1109px] mx-auto">
        <div className="flex justify-between items-center mt-20">
          <div>
            <img src={headphone} alt="" width={540} height={560} />
          </div>
          <div>
            <HeroText />
          </div>
        </div>

        <div className="flex justify-between items-center mt-[160px]">
          <div>
            <HeroText />
          </div>
          <div>
            <img src={headphone} alt="" width={540} height={560} />
          </div>
        </div>

        <div className="mt-[160px]">
          <Card></Card>
        </div>

        <DescProduct></DescProduct>
      </div>
      <div className='mt-[160px]'>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Speakers;
