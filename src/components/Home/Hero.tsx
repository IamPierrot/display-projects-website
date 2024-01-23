import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
  return (
    <div className="h-full w-full p-20">
      <div className="">
        <h1 className="py-6 font-mono text-3xl text-white">
          <TypeAnimation
            sequence={[
              "Hello!",
              1000,
              "Welcome to our website.",
              1000,
              "This website is made by Kry and Pierrot.",
              1000,
            ]}
            wrapper="span"
            speed={35}
            repeat={Infinity}
          />
        </h1>
      </div>
      <div className="flex justify-around pb-6 pl-6">
        <div className="flex flex-col items-center justify-center text-center font-mono font-bold text-white">
          <h1 className="text-2xl">Everyone's waifu</h1>
          <span className="text-nowrap">Anh huy ơi em nhớ anh</span>
        </div>
        <img
          src="../../src/assets/image1.jpg"
          alt="ảnh test"
          className="h-2/6 w-2/6 rounded-3xl transition-all duration-300 ease-in-out hover:rotate-12 hover:shadow-[rgba(0,_0,_0,_0.7)_0px_30px_90px]"
        />
      </div>
      <div className="flex justify-around pr-6 pt-6">
        <img
          src="../../src/assets/image2.jpg"
          alt="ảnh test"
          className="h-2/6 w-2/6 rounded-3xl transition-all duration-300 ease-in-out hover:-rotate-12 hover:shadow-[rgba(0,_0,_0,_0.7)_0px_30px_90px]"
        />
        <div className="flex flex-col items-center justify-center text-center font-mono font-bold text-white">
          <h1 className="text-2xl">Vẹt's Waifu</h1>
          <span>Waifu thứ 2 của Vẹt</span>
        </div>
      </div>
    </div>
  );
};
