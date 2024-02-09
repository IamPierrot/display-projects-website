import { BrowserRouter as Router } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { EventScroll } from "./utils/eventScroll";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { UtilityBar } from "./utils/utilitiesBar";

library.add(fas);

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-slate-900 text-slate-50">
      <Router>
        <EventScroll />
        <Header />
        <Navigation />
        <UtilityBar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
