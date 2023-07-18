import "./App.css";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Navbar from "./component/navbar";

function App() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Navbar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
