import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen bg-[#FEF9ED] min-h-screen">
      <header className="w-full p-2 flex items-center justify-center">
        <Image
          src="/shine-sisters-logo.png"
          alt="logo"
          width={100}
          height={70}
          className="lg:w-[10%] h-full object-contain"
        />
      </header>
      <main className="w-full  flex flex-col items-center  justify-center p-5">
        <h1 className="lg:text-[5rem] text-[2.5rem] font-shine font-medium text-[#590316]">
          Website Coming Soon!
        </h1>
        <h4 className="text-center text-lg lg:w-[50%] mt-2">
          The Shine Sisters website is launching soon, bringing our full
          collection of timeless accessories to your fingertips.
        </h4>
        <div className="w-full flex flex-col items-center mt-5">
          <h2 className="lg:text-[2rem] text-[1.2rem] font-shine font-medium text-[#590316] text-center">
            We’re still live on Instagram — message us to place orders, explore
            our collection, or say hello.
          </h2>
          <Image src={"/aakriti-photo.jpg"} alt="aakriti-photo" height={100} width={100}/>
          <div className="w-full flex flex-col items-center justify-center gap-4 mt-8">
           
            <a href="https://www.instagram.com/shine_sisters_2/" className="px-[24px] py-[12px] text-white bg-[#590316] rounded-sm">DM US TO PLACE AN ORDER </a>
          </div>
        </div>
      </main>
    </div>
  );
}
