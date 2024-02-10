import { Hero } from "./Hero";
import { RepoCards } from "./RepoCards";

export const Home = () => {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-3 font-default">
      <Hero />
      <RepoCards />
    </div>
  );
};
