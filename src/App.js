import "./App.css";
import Sec1 from "./sections/sec1";
import Sec2 from "./sections/sec2";
import Sec3 from "./sections/sec3";
import Sec4 from "./sections/sec4";
import Sec5 from "./sections/sec5";
import Sec6 from "./sections/sec6";
import Footer from "./sections/footer";

function App() {
  return (
    <div className="App">
      <div className="sec1">
        <Sec1 />
      </div>
      <div className="sec2">
        <Sec2 />
      </div>
      <div className="sec3">
        <Sec3 />
      </div>
      <div className="sec4">
        <Sec4 />
      </div>
      <div className="sec5">
        <Sec5 />
      </div>
      <div className="sec6">
        <Sec6/>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
