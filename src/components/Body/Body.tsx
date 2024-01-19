import { BrowserRouter } from "react-router-dom";
import { Navigation } from "../Navigation";

export const Body = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#344161] to-[#38466D] to-25%">
      <BrowserRouter>
        <Navigation></Navigation>
      </BrowserRouter>
    </div>
  );
};
