import "./App.css";
import Header from "./components/Header/Header";
import Intro from "./section/Intro/Intro";
import Customers from "./section/Customers/Customers";
import Features from "./section/Features/Features";
import Platforms from "./section/Platforms/Platforms";
import Footer from "./components/Footer/Footer";
import HexNode from "./section/HexNode/HexNode";
import ChatBot from "./section/ChatBot/ChatBot";
function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <HexNode />
      <Features />
      <Platforms />
      <Customers />
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
