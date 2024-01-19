import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState("HOME");
  const [styleStickMenu, setStyleStickMenu] = useState("");
  const [styleLink, setStyleLink] = useState("");

  const items = [
    { name: "HOME", link: "/" },
    { name: "PAGE", link: "/page" },
    { name: "API", link: "/api" },
    { name: "TEAM", link: "/team" },
  ];
  useEffect(() => {
    const handleStickMenu = () => {
      if (
        document.body.scrollTop >= 200 ||
        document.documentElement.scrollTop >= 200
      ) {
        setStyleStickMenu(
          "sticky z-50 bg-[--primary-header1-color] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition-all ease-in-out duration-500",
        );
        setStyleLink("transition-all ease-in-out duration-500");
      } else {
        setStyleStickMenu("");
        setStyleLink("");
      }
    };

    window.addEventListener("scroll", handleStickMenu);

    return () => {
      window.removeEventListener("scroll", handleStickMenu);
    };
  }, []);

  return (
    <nav
      className={`top-0 flex h-[60px] w-full flex-row items-center justify-between p-4 font-mono font-bold text-white ${styleStickMenu}`}
    >
      <div className="ml-10 cursor-pointer">
        <Link to="/">
          <img
            src="../../src/assets/logo.jpg"
            alt="logo image"
            className="h-10 w-full rounded-[50%]"
            onClick={() => setActive("HOME")}
          />
        </Link>
      </div>
      <div className="pr-15 mr-12 cursor-pointer space-x-3">
        {/* <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
              onClick={() => setShowMenu(!showMenu)}
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
        </div> */}
        <ul className="flex items-center justify-between gap-8">
          {items.map((i, key) => (
            <li
              key={key}
              className={`transition duration-200 hover:text-[#5facf9] ${
                active === i.name ? "text-[#5facf9]" : "text-[#fff]"
              } ${styleLink}`}
              onClick={() => setActive(i.name)}
            >
              <Link to={i.link}>{i.name}</Link>
            </li>
          ))}
        </ul>
        {/* {showMenu && (
          <ul className="absolute w-full flex-col bg-[--primary-header-color] pt-2">
            
          </ul>
        )} */}
      </div>
    </nav>
  );
};
