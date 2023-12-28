import { Footer } from "./components/Footer";
import { EventScroll } from "./utils/eventScroll";

function App() {
  EventScroll();
  return (
    <div className="bg-white">
      <EventScroll></EventScroll>
      <Footer />
    </div>
  );
}

export default App;
