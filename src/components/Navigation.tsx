import { Route, Routes } from "react-router-dom";
import { Api } from "./Api/Api";
import { Team } from "./Team/Team";
export const Navigation = () => {
  return (
    <Routes>
      <Route path="/"></Route>
      <Route path="/Api" element={<Api />} />
      <Route path="/Team" element={<Team />} />
    </Routes>
  );
};
