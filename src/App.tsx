import { Footer } from "./components/Footer";
import { EventScroll } from "./utils/eventScroll";
import { Header } from "./components/Header";
import { Body } from "./components/Body";

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
