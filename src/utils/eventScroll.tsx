import { useEffect, useState } from "react";

export const EventScroll = () => {
  const [showGoToTop, setshowGoToTop] = useState(false);

  useEffect(() => {
    const handlerScroll = () => {
      setshowGoToTop(
        document.body.scrollTop > 200 ||
          document.documentElement.scrollTop > 200,
      );
    };
    window.addEventListener("scroll", handlerScroll);

    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, []);
  return (
    showGoToTop && (
      <button
        id="to-top-button"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        title="Go To Top"
        className="z-90 fixed bottom-8 right-8 h-16 w-16 animate-bounce rounded-full border-0 bg-indigo-500 text-3xl font-bold text-white drop-shadow-md transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:scale-110 hover:animate-none"
      >
        &uarr;
      </button>
    )
  );
};
