import zx9 from '../assets/product-yx1-earphones/zx9.jpg'
import zx7 from '../assets/product-yx1-earphones/zx7.jpg'
import Card from '../components/Card'
import HeroText from '../components/HeroText'

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
            <img src={zx9} alt="" width={540} height={560} />
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
            <img src={zx7} alt="" width={540} height={560} />
          </div>
        </div>

        <div className="mt-[160px]">
          <Card></Card>
        </div>
      </div>
    </>
  );
}

export default Speakers;
