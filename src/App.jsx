import "./App.css";
import Header from "./components/Header/Header";
import Intro from "./section/Intro/Intro";
import Customer from "./section/Customer/Customer";
import Features from "./section/Features/Features";
import Platforms from "./section/Platforms/Platforms";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Features />
      <Platforms />
      <Customer />
    </div>
  );
}

export default App;
