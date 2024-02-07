import { BrowserRouter as Router } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { EventScroll } from "./utils/eventScroll";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

library.add(fas);

function App() {
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      localStorage.removeItem("activeTab");
    });

    return () => {
      window.removeEventListener("beforeunload", () => {
        localStorage.removeItem("activeTab");
      });
    };
  }, []);
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-slate-900 text-slate-50">
      <Router>
        <EventScroll />
        <Header />
        <Navigation />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
