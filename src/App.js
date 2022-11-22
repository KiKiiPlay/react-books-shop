import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./component/MyNav";
import Myfooter from "./component/MyFooter";

function App() {
  return (
    <div>
      <MyNav subtitle="Strive-Shop" />
      <Myfooter />
    </div>
  );
}

export default App;
