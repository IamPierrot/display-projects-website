import { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPager,
  faCode,
  faMugHot,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export const Header = memo(() => {
  const [styleStickMenu, setStyleStickMenu] = useState("");
  const [styleLink, setStyleLink] = useState("");

  const [active, setActive] = useState(() => {
    const storedActive = localStorage.getItem("activeTab");
    return storedActive ?? "HOME";
  });

  useEffect(() => {
    localStorage.setItem("activeTab", active);
    return () => {
      localStorage.removeItem("activeTab");
    };
  }, [active]);

  const items = [
    { name: "Home", icon: <FontAwesomeIcon icon={faHouse} />, link: "/" },
    { name: "Page", icon: <FontAwesomeIcon icon={faPager} />, link: "/page" },
    { name: "Api", icon: <FontAwesomeIcon icon={faCode} />, link: "/api" },
    { name: "Team", icon: <FontAwesomeIcon icon={faMugHot} />, link: "/team" },
  ];

  useEffect(() => {
    const handleStickMenu = () => {
      if (
        document.body.scrollTop >= 200 ||
        document.documentElement.scrollTop >= 200
      ) {
        setStyleStickMenu(
          "sticky z-50 bg-slate-800 border-b border-slate-300/10",
        );
        setStyleLink(" duration-500");
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
      className={`top-0 flex h-[60px] w-full items-center font-default text-base font-semibold text-slate-50 ${styleStickMenu}`}
    >
      <div className="mx-auto flex w-full max-w-screen-xl flex-row items-center justify-between px-3">
        <div className=" cursor-pointer">
          <Link to="/" onClick={() => setActive("HOME")}>
            <img
              src="../../logo.jpg"
              alt="logo image"
              className="h-10 w-full rounded-[50%]"
            />
          </Link>
        </div>
        <div className="hidden cursor-pointer md:block">
          <ul className="flex items-center justify-between gap-10">
            {items.map((i, key) => (
              <li
                key={key}
                className={`transition duration-200 hover:text-cyan-600 ${
                  active.toLowerCase() === i.name.toLowerCase()
                    ? "text-cyan-600"
                    : "text-slate-50 "
                } ${styleLink}`}
                onClick={() => setActive(i.name)}
              >
                <Link to={i.link}>
                  <div className="flex items-center gap-2">
                    {i.icon}
                    {i.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="cursor-pointer text-xl">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </nav>
  );
});
