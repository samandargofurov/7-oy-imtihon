import human from "../assets/product-yx1-earphones/human.jpg"

function DescProduct() {
  return (
    <>
        <div className="container w-[1109px] mx-auto">
            <div className='flex justify-between items-center mt-[160px] mb-[160px]'>
            <div className="flex flex-col gap-8">
              <h1 className="uppercase text-5xl w-[450px] font-semibold">Bringing you the <span className="text-[#D87D4A]">best</span> audio gear</h1>
              <p className="opacity-60 w-[450px]">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
            <div>
                <img src={human} alt="" width={540} height={588}  />
            </div>
            </div>
        </div>
    </>
  )
}

export default DescProduct