import "./App.css";
import CardContainer from "./Card-Container";
import Header from "./Layout/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="filters"></div>
      <CardContainer />
    </div>
  );
}

export default App;
