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
        className="fixed bottom-8 right-8 z-50 size-12 animate-bounce rounded-2xl border-0 bg-cyan-300 font-default text-xl font-bold text-neutral-900 drop-shadow-md transition delay-150 duration-300 ease-in-out hover:bg-cyan-400"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    )
  );
};
