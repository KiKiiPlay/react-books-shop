import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LatestRelease from "./component/LatestRelease";
import MyNav from "./component/MyNav";
import Myfooter from "./component/MyFooter";
import Welcome from "./component/Welcome";
import { Container, Row, Col } from "react-bootstrap";
import { Component } from "react";

class App extends Component {
  state = {
    bookID: "",
    pickedBook: false,
  };

  changeID = (itemToSelect) => {
    this.setState({
      bookID: itemToSelect,
    });
  };

  pickBook = () => {};

  render() {
    return (
      <div>
        <MyNav subtitle="Strive-Shop" />
        <Welcome />
        <Container>
          <Row className="justify-content-between">
            <Col>
              <LatestRelease
                bookID={this.state.bookID}
                changeID={this.changeID}
              />
            </Col>
          </Row>
        </Container>
        <Myfooter />
      </div>
    );
  }
}

export default App;
