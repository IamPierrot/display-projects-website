export const Header = () => {
  return (
    <header className="w-full bg-[#FF202337] flex flex-row items-center justify-between p-4 text-black font-bold shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] sticky">
        <div className='cursor-pointer'>
            <h1>Logo Vjp Pro</h1>
        </div>
        <div className='space-x-3 pr-10 cursor-pointer'>
            <ul className="flex flex-row items-center justify-between p-1 space-x-5 font-[Poppins]">
                <div className="group">
                    <li className="group-hover:text-[#A67E4E]">Home</li>
                </div>
                <div className="group">
                    <li className="group-hover:text-[#A67E4E]">
                        <a href="https://casapchim.github.io/get-random-image-anime/" target="_blank">Get Anime Image</a>
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
  )
}
