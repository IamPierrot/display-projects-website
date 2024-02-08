import { useCallback, useEffect, useMemo, useState } from "react";
import { WebsiteCards } from "../..";

const websiteOfFish: WebsiteCards[] = [
  {
    name: "Random Anime Image",
    link: "https://casapchim.github.io/get-random-image-anime/",
    image: "anime",
    author: "Kry",
  },
];
const websiteOfPierrot: WebsiteCards[] = [];
const slides = [
  <div
    key={100}
    className="flex w-full flex-none flex-col items-center justify-center space-y-4 bg-pink-300 text-white"
  >
    <h2 className="max-w-md text-4xl">Your Big Idea</h2>
    <p className="max-w-md text-nowrap">
      It's fast, flexible, and reliable — with zero-runtime.
    </p>
  </div>,

  <div
    key={101}
    className="flex w-full flex-none flex-col items-center justify-center space-y-4 bg-blue-500 text-white"
  >
    <h2 className="max-w-md text-4xl">Vote đi các cháu</h2>
    <p className="max-w-md">
      <a href="https://khaosat.me/survey/hoc-sinh-thanh-lich-nam-2024-e194781">
        Ấn vào đây Số 107
      </a>
    </p>
  </div>,
  <div
    key={102}
    className="flex w-full flex-none flex-col items-center justify-center space-y-4 bg-red-500 text-white"
  >
    <h2 className="max-w-md text-4xl">Vote đi các cháu</h2>
    <p className="max-w-md">
      <a href="https://khaosat.me/survey/hoc-sinh-thanh-lich-nam-2024-e194781">
        Ấn vào đây Số 107
      </a>
    </p>
  </div>,
];

export const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveSlideRight = useCallback(() => {
    const slider = document.getElementById("slider");
    if (!slider) return;
    // const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    const nextSlideIndex =
      currentIndex + 1 >= slides.length ? 0 : currentIndex + 1;
    const nextSlideOffset = nextSlideIndex * slider.clientWidth;

    slider.scrollTo({ left: nextSlideOffset });

    setCurrentIndex(nextSlideIndex);
  }, [currentIndex]);
  const moveSlideLeft = useCallback(() => {
    const slider = document.getElementById("slider");
    if (!slider) return;
    // const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    const nextSlideIndex =
      currentIndex - 1 < 0 ? slides.length - 1 : currentIndex - 1;
    const nextSlideOffset = nextSlideIndex * slider.clientWidth + 1;

    slider.scrollTo({ left: nextSlideOffset });

    setCurrentIndex(nextSlideIndex);
  }, [currentIndex]);
  useEffect(() => {
    const slider = document.getElementById("slider");
    if (!slider) return;

    const intervalSlideMove = setInterval(moveSlideRight, 5000);

    return () => {
      clearInterval(intervalSlideMove);
    };
  }, [moveSlideRight, moveSlideLeft]);

  const renderCard = useMemo(() => {
    return (website: WebsiteCards) => (
      <li
        key={website.name}
        className={`relative mt-4 h-40 w-64 cursor-pointer rounded-xl bg-gradient-to-tr from-purple-400 to-fuchsia-400 font-mono text-black transition duration-300 hover:scale-110 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]`}
      >
        <div className="absolute flex h-full w-full items-center justify-center px-2">
          <h1 className="pt-2 text-center">{website.name}</h1>
        </div>

        <div className="text-center text-base font-bold tracking-widest no-underline">
          <h1 className="text-black">{website.author}</h1>
        </div>
      </li>
    );
  }, []);
  return (
    <div className="mx-20 pb-20 pl-20 pr-20 pt-10 font-mono">
      <div id="sliderRoot" className="relative flex h-60 w-full bg-no-repeat">
        <button
          onClick={moveSlideRight}
          className="absolute -right-5 top-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-center shadow-md"
        >
          <i className="fas fa-chevron-right text-2xl font-bold text-gray-500"></i>
        </button>

        <button
          onClick={moveSlideLeft}
          className="absolute -left-5 top-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-center shadow-md"
        >
          <i className="fas fa-chevron-left text-2xl font-bold text-gray-500"></i>
        </button>

        <div
          id="slider"
          className="flex h-full w-full snap-mandatory flex-nowrap overflow-hidden scroll-smooth rounded-3xl text-center"
        >
          {slides.map((value) => value)}
        </div>
      </div>
      <div className="space-y-20 pt-12 font-extrabold text-white">
        <div className="">
          <h1 className="border-b-2 text-2xl">Most Popular</h1>
          <ul className="flex gap-4">
            {/* {websiteOfFish.map((value) => renderCard(value))} */}
          </ul>
        </div>
        <div className="">
          <h1 className="border-b-2 text-2xl ">Kry's Websites</h1>
          <ul className="flex gap-4">
            {websiteOfFish.map((value, index) => (
              <a href={value.link} key={index * 100} className="h-full w-full">
                {renderCard(value)}
              </a>
            ))}
          </ul>
        </div>
        <div className="">
          <h1 className="border-b-2 text-2xl ">Pierrot's Websites</h1>
          <ul className="flex gap-4">
            {websiteOfPierrot.map((value) => renderCard(value))}
          </ul>
        </div>
      </div>
    </div>
  );
};
