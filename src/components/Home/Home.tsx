import { Hero } from "./Hero";
import { RepoCards } from "./RepoCards";

export const Home = () => {
  return (
    <div className="font-default mx-auto max-w-screen-xl px-3">
      <Hero />
      <RepoCards />
    </div>
  );
};
