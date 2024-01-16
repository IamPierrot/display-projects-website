import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState("HOME");

  let items = [
    { name: "HOME", link: "/"},
    { name: "PAGE", link: "/page"},
    { name: "API", link: "/api"},
    { name: "TEAM", link: "/team"},
  ]
  return (
    <nav className="sticky top-0 z-50 flex w-full h-[60px] flex-row items-center justify-between bg-[--primary-header-color] p-4 font-bold text-white shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      <div className="ml-10 cursor-pointer">
        <Link to="/">
          <img 
            src="../../src/assets/logo.jpg" 
            alt="logo image" 
            className="w-full h-10 rounded-[50%]"
            onClick={() => setActive("HOME")}
          />
        </Link>
      </div> 
      <div className="pr-15 cursor-pointer space-x-3 mr-12">
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
        <ul className="flex justify-between items-center gap-8">
          { items.map(i => (
            <li 
              className={`hover:text-[#5facf9] transition duration-200 ${active === i.name ? 'text-[#5facf9]' : 'text-[#fff]'}`}
              onClick={() => setActive(i.name)}
            >
              <Link to={i.link} >{i.name}</Link>
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
