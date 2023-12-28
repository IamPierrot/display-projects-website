export const EventScroll = () => {
  function goToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const toTopButton = document.getElementById("to-top-button");
  window.onscroll = function () {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      toTopButton?.classList.remove("hidden");
    } else {
      toTopButton?.classList.add("hidden");
    }
  };
  return (
    <button
      id="to-top-button"
      onClick={goToTop}
      title="Go To Top"
      className="z-90 fixed bottom-8 right-8 hidden h-16 w-16 rounded-full border-0 bg-indigo-500 text-3xl font-bold text-white drop-shadow-md transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:scale-110"
    >
      &uarr;
    </button>
  );
};
