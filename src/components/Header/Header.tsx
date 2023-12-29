export const Header = () => {
  return (
    <header className="sticky flex w-full flex-row items-center justify-between bg-[--primary-header-color] p-4 font-bold text-black shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      <div className="cursor-pointer">
        <h1 className="text-[#fff]">Logo Vjp Pro</h1>
      </div>
      <div className="cursor-pointer space-x-3 pr-10">
        <ul className="flex flex-row items-center justify-between space-x-5 p-1 font-[Poppins] text-[#fff]">
          <div className="group">
            <li className="group-hover:text-[#A67E4E]">Home</li>
          </div>
          <div className="group">
            <li className="group-hover:text-[#A67E4E]">
              <a
                href="https://casapchim.github.io/get-random-image-anime/"
                target="_blank"
              >
                Get Anime Image
              </a>
            </li>
          </div>
          <div className="group">
            <li className="group-hover:text-[#A67E4E]">Deo biet de cai gi</li>
          </div>
          <div className="group">
            <li className="group-hover:text-[#A67E4E]">Team</li>
          </div>
        </ul>
      </div>
    </header>
  );
};
