import "./App.css";
import Header from "./components/Header/Header";
import Intro from "./section/Intro/Intro";
import Customer from "./section/Customer/Customer";
import Features from "./section/Features/Features";
import Platforms from "./section/Platforms/Platforms";
import Footer from "./components/Footer/Footer";
import HexNode from "./section/HexNode/HexNode";
function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <HexNode />
      <Features />
      <Platforms />
      <Customer />
      <Footer />
    </div>
  );
}

export default App;
