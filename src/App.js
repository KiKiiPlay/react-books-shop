import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyNav from "./component/MyNav";
import Myfooter from "./component/MyFooter";

function App() {
  return (
    <Container fluid>
      <Row className="d-flex flex-column">
        <Col>
          <MyNav subtitle="Strive-Shop" />
        </Col>
        <Col>
          <Myfooter />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
