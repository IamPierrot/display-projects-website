import { Footer } from "./components/Footer";
import { EventScroll } from "./utils/eventScroll";
import { Header } from "./components/Header";

function App() {
  EventScroll();
  return (
    <div className="bg-white">
      <Header />
      <div className="h-screen w-full bg-[#A67E4E]"></div>
      <EventScroll></EventScroll>
      <Footer />
    </div>
  );
}

export default App;
