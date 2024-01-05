import { BrowserRouter } from "react-router-dom";
import { Navigation } from "../Navigation";

export const Body = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-tr from-cyan-500 to-blue-900">
      <BrowserRouter>
        <Navigation></Navigation>
      </BrowserRouter>
    </div>
  );
};
