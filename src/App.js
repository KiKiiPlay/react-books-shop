import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LatestRelease from "./component/LatestRelease";
import MyNav from "./component/MyNav";
import Myfooter from "./component/MyFooter";
import Welcome from "./component/Welcome";
import { Container, Row, Col } from "react-bootstrap";
import CommentArea from "./component/CommentArea";
import { Component } from "react";

class App extends Component {
  state = {
    bookID: "",
  };

  changeID = (itemToSelect) => {
    this.setState({
      bookID: itemToSelect,
      commentsID: "",
    });
  };

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
            <Col>
              <CommentArea />
            </Col>
          </Row>
        </Container>
        <Myfooter />
      </div>
    );
  }
}

export default App;
