import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
    return (
        <div className="w-full h-full p-20">
            <div className="">
                <h1 className="text-white font-mono text-3xl py-6">
                    <TypeAnimation
                        sequence={[
                            'Hello!',
                            1000, 
                            'Welcome to our website.',
                            1000,
                            'This website is made by Kry and Pierrot.',
                            1000,
                        ]}
                        wrapper="span"
                        speed={35}
                        repeat={Infinity}
                    />
                </h1>
            </div>
            <div className="flex pb-6 pl-6 justify-around">
                <div className="text-white font-bold font-mono text-center flex items-center justify-center flex-col">
                    <h1 className="text-2xl">Vẹt's waifu</h1>
                    <span>
                        Waifu thứ 1 của Vẹt
                    </span>
                </div>
                <img 
                    src="../../src/assets/image1.jpg" 
                    alt="ảnh test" 
                    className="w-2/6 h-2/6 rounded-3xl hover:rotate-12 transition-all ease-in-out duration-300 hover:shadow-[rgba(0,_0,_0,_0.7)_0px_30px_90px]"
                />
            </div>
            <div className="flex pt-6 pr-6 justify-around">
                <img 
                    src="../../src/assets/image2.jpg" 
                    alt="ảnh test" 
                    className="w-2/6 h-2/6 rounded-3xl hover:-rotate-12 transition-all ease-in-out duration-300 hover:shadow-[rgba(0,_0,_0,_0.7)_0px_30px_90px]"
                />
                <div className="text-white font-bold font-mono text-center flex items-center justify-center flex-col">
                    <h1 className="text-2xl">Vẹt's Waifu</h1>
                    <span>
                        Waifu thứ 2 của Vẹt
                    </span>
                </div>
            </div>       
        </div>
    )
}
