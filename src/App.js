import "./styles.css";
import ReactDOM from "react-dom";
import Search from "./Search";
import Forecast from "./Forecast";
import Humidity from "./Humidity";
import Temperature from "./Temperature";
import City from "./City";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div>
        <Search />
        <City />
        <Forecast />
        <div className="weatherDetails">
          <Temperature value="12" />
          <Humidity />
        </div>
        <Footer />
      </div>
    </div>
  );
}
