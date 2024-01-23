export const Team = () => {
  interface Team {
    name: string;
    avatarUrl: string;
    desc: string;
    fbLink: string;
  }

  const teams: Team[] = [
    { name: "Kry", avatarUrl: "https://avatars.githubusercontent.com/u/117553015?v=4", desc: "Hello", fbLink: "" },
    { name: "Pierrot", avatarUrl: "https://avatars.githubusercontent.com/u/123743390?v=4", desc: "Hello", fbLink: ""},
  ]
  return (
    <div>
      <h1 className="text-white text-center pt-3 font-mono text-3xl">OUR TEAM</h1>
      <div className="my-10 w-full flex justify-evenly flex-wrap">
        {teams.map((team, i) => (
          <div key={i} className="w-80 h-96 bg-white rounded-2xl p-3 flex flex-col gap-3 my-3 items-center hover:scale-105 duration-300 hover:shadow-[4.0px_10.0px_8.0px_rgba(0,0,0,0.8)]">
            <img 
              src={team.avatarUrl} 
              alt="avatar"
              className="rounded-[50%] w-[150px] h-[150px] border-4 border-blue-500 border-solid" 
            />
            <h1 className="font-mono text-center text-xl">{team.name}</h1>
            <span>{team.desc}</span>
            <div className="flex gap-3 mt-5 w-full justify-evenly">
              <a href="" target="_blank">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 496 512"
                  className="w-8 h-8"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                </svg>
              </a>
              <a href="" target="_blank">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 512 512"
                  className="w-8 h-8"
                >
                  <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) 
};
