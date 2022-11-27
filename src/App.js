import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LatestRelease from "./component/LatestRelease";
import MyNav from "./component/MyNav";
import Myfooter from "./component/MyFooter";
import Welcome from "./component/Welcome";

function App() {
  return (
    <>
      <MyNav subtitle="Strive-Shop" />
      <Welcome />
      <LatestRelease />
      <Myfooter />
    </>

    // <Container fluid className="px-0">
    //   <Row className="d-flex">
    //     <Col className="px-0">
    //       <MyNav subtitle="Strive-Shop" />
    //     </Col>
    //     <Col className="px-0">
    //       <Myfooter />
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default App;
