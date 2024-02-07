import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";

export const Team = () => {
  interface Team {
    name: string;
    avatarUrl: string;
    desc: string;
    fbLink: string;
  }

  const teams: Team[] = [
    {
      name: "Kry",
      avatarUrl: "https://avatars.githubusercontent.com/u/117553015?v=4",
      desc: "Hello",
      fbLink: "",
    },
    {
      name: "Pierrot",
      avatarUrl: "https://avatars.githubusercontent.com/u/123743390?v=4",
      desc: "Hello",
      fbLink: "",
    },
    {
      name: "KitoMC",
      avatarUrl: "https://avatars.githubusercontent.com/u/95675413?v=4",
      desc: "Một người bình thường",
      fbLink: "",
    },
  ];
  return (
    <div className="mx-auto my-20 ddmax-w-screen-xl px-3  font-default">
      <div className=" text-center">
        <h1 className=" mb-3 text-4xl font-extrabold text-slate-50">
          Our Team
        </h1>
        <p className="text-pretty text-lg font-normal text-slate-300">
          Our team consists of three individuals, each contributing their unique
          expertise and perspective to our collective efforts.
        </p>
      </div>
      <div className="my-10 flex w-full flex-wrap justify-evenly gap-3">
        {teams.map((team, i) => (
          <div
            key={i}
            className="my-3 flex h-96 w-80 flex-col items-center rounded-2xl bg-slate-800 p-3 duration-300  hover:bg-slate-700"
          >
            <img
              src={team.avatarUrl}
              alt="avatar"
              className="mb-5 h-[150px] w-[150px] rounded-[50%] border-4 border-solid border-blue-500"
            />
            <h1 className="text-center text-xl font-bold">{team.name}</h1>
            <span className="text-stale-300">{team.desc}</span>
            <div className="mb-3 mt-auto flex w-full justify-evenly gap-3 text-4xl">
              <a href="" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="" target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
