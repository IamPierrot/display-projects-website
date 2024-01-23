import { BrowserRouter as Router } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { EventScroll } from "./utils/eventScroll";

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-gradient-to-b from-[#344161] to-[#38466D] to-25%">
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
