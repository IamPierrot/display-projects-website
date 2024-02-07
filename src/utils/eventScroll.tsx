import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
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
        className="text-white-900 hover:bg-bg-neutral-500 fixed bottom-8 right-8 z-50 size-12 animate-bounce rounded-2xl border-0 bg-neutral-400 text-xl font-bold drop-shadow-md transition text-white delay-150 duration-300 ease-in-out"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    )
  );
};
