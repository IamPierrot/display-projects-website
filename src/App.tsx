import { BrowserRouter as Router } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { EventScroll } from "./utils/eventScroll";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-white">
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
