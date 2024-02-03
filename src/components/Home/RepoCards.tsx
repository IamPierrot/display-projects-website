import { useEffect, useState } from "react";
import getAllRespo from "../../utils/getOurRepositories";
import { ModalCard } from "../../utils/ModalCard";
import { RepoCardsProp } from "../Page/wesiteType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeFork, faStar } from "@fortawesome/free-solid-svg-icons";

export const RepoCards = () => {
  const [repos, setRepos] = useState<RepoCardsProp[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedRepo, setSelectedRepo] = useState<RepoCardsProp | null>();
  useEffect(() => {
    const repositories: RepoCardsProp[] = [];
    getAllRespo().then((rs) => {
      for (const [author, repos] of Object.entries(rs)) {
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
                language: repo[index].language,
                create_at: repo[index].created_at,
              });
            }
          });
        }
      }
      setRepos(repositories);
    });
  }, []);

  const handleShowModal = (repo: RepoCardsProp) => {
    setShowModal(!showModal);
    setSelectedRepo(repo);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRepo(null);
  };

  const title: string = "Details of this repository";

  return (
    <div className="flex flex-col pb-10">
      <div className="mb-8 text-center ">
        <h1 className="mb-3 text-4xl font-extrabold text-neutral-900">
          Product exhibition space
        </h1>
        <p className="text-lg font-normal text-neutral-600">
          This is the showcase of{" "}
          <span className="font-medium text-cyan-500">CaSapChim</span> and{" "}
          <span className="font-medium  text-cyan-500">IamPierrot</span>{" "}
          products.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((i) => (
          <div
            key={i.id}
            className="relative flex h-52 cursor-pointer flex-col justify-between rounded-xl bg-neutral-100 p-4 duration-300 hover:bg-neutral-200"
            onClick={() => handleShowModal(i)}
          >
            <div className="flex items-center gap-5">
              <img
                src={i.avatarUrl}
                alt="author image"
                className="h-14 w-14 flex-none rounded-full object-cover"
              />
              <div className="">
                <h1 className=" test-base font-bold">{i.author}</h1>
                <p>{i.repoTitle}</p>
              </div>
            </div>
            <div className="mt-auto flex w-full justify-between">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faStar} />
                {i.star}
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCodeFork} />
                {i.fork}
              </div>
            </div>
          </div>
        ))}
        <ModalCard
          visible={showModal}
          close={handleCloseModal}
          title={title}
          desc={selectedRepo?.desc}
          create_at={selectedRepo?.create_at}
          language={selectedRepo?.language}
        />
      </div>
    </div>
  );
};
