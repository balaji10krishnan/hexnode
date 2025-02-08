import "./App.css";
import Header from "./components/Header/Header";
import { Menu } from "./assets/svg/svg";
import Intro from "./section/Intro/Intro";
import Customer from "./section/Customer/Customer";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Customer />
    </div>
  );
}

export default App;
