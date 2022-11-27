import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LatestRelease from "./component/LatestRelease";
import MyNav from "./component/MyNav";
import Myfooter from "./component/MyFooter";
import Welcome from "./component/Welcome";

function App() {
  return (
    <div>
      <MyNav subtitle="Strive-Shop" />
      <Welcome />
      <LatestRelease />
      <Myfooter />
    </div>
  );
}

export default App;
