import { Footer } from "./components/Footer/Footer";
import { EventScroll } from "./utils/eventScroll";
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";

function App() {
  EventScroll();
  return (
    <div className="h-full w-full bg-white">
      <EventScroll />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
