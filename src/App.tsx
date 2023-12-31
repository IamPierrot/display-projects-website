import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import { EventScroll } from "./utils/eventScroll";

function App() {
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
