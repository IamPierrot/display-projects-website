import { Hero } from "./Hero";
import { RepoCards } from "./RepoCards";

export const Home = () => {
  return (
    <div className="max-w-screen-xl px-3 mx-auto">
      <Hero/>
      <RepoCards/> 
    </div>
  );
};
