import "./App.css";
import CardContainer from "./Card-Container";
import Header from "./Layout/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout/Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            element={
              <div className="main-page">
                <div className="filters"></div>
                <CardContainer />
              </div>
            }
            path="/"
          />
          <Route element={<Checkout />} path="/checkout" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
