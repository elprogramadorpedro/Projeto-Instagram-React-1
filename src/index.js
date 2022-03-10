import ReactDom from "react-dom";
import Navbar from "./Navbar";
import Corpo from "./Corpo";

function App() {
  return (
    <div>
      <Navbar />
      <Corpo />
    </div>
  );
}

const app = App();
ReactDom.render(app, document.querySelector(".root"));
