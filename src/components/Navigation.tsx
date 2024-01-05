import { Route, Routes } from "react-router-dom";
import { Api } from "./Api/Api";
import { Team } from "./Team/Team";
import { Page } from "./Page/Page";
export const Navigation = () => {
  return (
    <Routes>
      <Route path="/"></Route>
      <Route path="/api" element={<Api />} />
      <Route path="/page" element={<Page />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  );
};
