import { useState } from "react";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const headers = (
    <>
      <div className="group">
        <li className="group-hover:text-[#A67E4E]">
          <a href="/">HOME</a>
        </li>
      </div>
      <div className="group">
        <li className="group-hover:text-[#A67E4E]">
          <a href="/pages">PAGE</a>
        </li>
      </div>
      <div className="group">
        <li className="group-hover:text-[#A67E4E]">
          <a href="/api">API</a>
        </li>
      </div>
      <div className="group">
        <li className="group-hover:text-[#A67E4E]">
          <a href="/team">TEAM</a>
        </li>
      </div>
    </>
  );
  return (
    <header className="fixed flex w-full flex-row items-center justify-between bg-[--primary-header-color] p-4 font-bold text-black shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      <div className="cursor-pointer">
        <h1 className="text-[#fff]">Logo Vjp Pro</h1>
      </div>
      <div className="pr-15 cursor-pointer space-x-3">
        <ul className="flex flex-row items-center justify-between space-x-8 p-1 font-[Poppins] text-[#fff]">
          {headers}

          <li className="relative shadow-black hover:shadow-lg">
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
          </li>
        </ul>
        {showMenu && (
          <ul className="absolute w-full flex-col bg-[--primary-header-color] pt-2">
            {headers}
          </ul>
        )}
      </div>
    </header>
  );
};
