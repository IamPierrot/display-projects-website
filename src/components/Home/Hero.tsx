import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
  return (
    <div className="h-full w-full p-20">
      <div className="">
        <h1 className="mx-auto py-6 font-mono text-4xl font-extrabold text-neutral-900">
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
        <div className="text-centerfont- flex flex-col items-center justify-center text-neutral-900">
          <h1 className="text-2xl font-medium">Everyone's waifu</h1>
          <span className="text-nowrap font-normal">Anh huy ơi em nhớ anh</span>
        </div>
        <img
          src="../../src/assets/image1.jpg"
          alt="ảnh test"
          className="h-2/6 w-2/6 rounded-3xl transition-all duration-300 ease-in-out hover:rotate-12 hover:shadow-lg"
        />
      </div>
      <div className="flex justify-around pr-6 pt-6">
        <img
          src="../../src/assets/image2.jpg"
          alt="ảnh test"
          className="h-2/6 w-2/6 rounded-3xl transition-all duration-300 ease-in-out hover:-rotate-12 hover:shadow-lg"
        />
        <div className="text-centerfont- flex flex-col items-center justify-center text-neutral-900">
          <h1 className="text-2xl font-medium">Vẹt's Waifu</h1>
          <span className="text-nowrap font-normal">Waifu thứ 2 của Vẹt</span>
        </div>
      </div>
    </div>
  );
};
