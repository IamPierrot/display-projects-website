import { useEffect, useState } from "react";
import getAllRespo from "../../utils/getOurRepositories";

interface RepoCardsProp {
  id: number;
  author: string;
  avatarUrl: string;
  repoTitle: string;
  desc: string | null;
  star: number | undefined;
  fork: number | undefined;
  repoUrl: string;
}

export const RepoCards = () => {
    const [repos, setRepos] = useState<RepoCardsProp[]>([]);
    useEffect(() => {
      const repositories: RepoCardsProp[] = [];
      getAllRespo().then((rs) => {
        for(const [author, repos] of Object.entries(rs)) {
          for (const repo of repos) {
            repo.map((i, index) => {
              if (!repo[index].fork && !repo[index].private) {
                repositories.push({
                  id: repo[index].id,
                  author: author,
                  avatarUrl: repo[index].owner.avatar_url,
                  repoTitle: repo[index].name,
                  desc: repo[index].description,
                  star: repo[index].stargazers_count,
                  fork: repo[index].forks_count,
                  repoUrl: repo[index].html_url,
                })
              }
            });
          }
        }
        setRepos(repositories);
      });
    }, []);

  return (
    <div className="flex flex-col">
        <h1 className="text-white text-center pt-5 pb-2 font-mono text-2xl">OUR REPOSITORIES</h1>
        <div className="flex flex-wrap justify-center gap-8 m-4">
          {repos.map((i) => (
            <div key={i.id} className="group relative w-72 h-52 bg-white font-mono rounded-xl hover:scale-105 duration-300 hover:shadow-[4.0px_10.0px_8.0px_rgba(0,0,0,0.8)]">
              <div className="absolute flex items-center justify-center w-full h-full px-2 invisible group-hover:visible disabled">
                  <a href={i.repoUrl} target="_blank">
                    <button 
                      className="border-2 border-solid border-black py-2 px-3 rounded-2xl bg-[--primary-header1-color] text-white font-mono hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                      
                    >
                      View Source
                    </button> 
                  </a>
              </div>
              <div className="absolute flex items-center justify-center w-full h-full px-2 group-hover:invisible">
                <h1 className="text-center pt-2">{i.desc}</h1>
              </div>
              <div className="flex items-center gap-2 font-bold pt-2 pl-2">
                <img 
                  src={i.avatarUrl} 
                  alt="author image" 
                  className="w-8 h-8 rounded-[50%]"              
                />
                <h1>{i.author}</h1>
              </div>
              <div className="text-center font-bold text-base tracking-widest">
                <u>
                  <h1>{i.repoTitle}</h1>
                </u>
              </div>
              <div className="absolute w-full bottom-0 mb-1.5 flex pl-2">
                <span className="flex items-center gap-1">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" viewBox="0 0 24 24" 
                  stroke-width="1.5" stroke="currentColor" 
                  className="w-6 h-6"
                >
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" 
                  />
                </svg>
                  {i.star}
                </span>
              </div>
              <div className="absolute bottom-0 right-4 mb-1.5">
                <span className="flex items-center">
                <svg 
                  aria-hidden="true" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  version="1.1" 
                  width="16" 
                  data-view-component="true" 
                  className="octicon octicon-repo-forked mr-2"
                >
                  <path 
                    d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"
                  >
                  </path>
                </svg>
                  {i.fork}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}
