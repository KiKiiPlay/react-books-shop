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

  changeSelectedMovieTitle = (newMovieTitle) => {
    this.setState({
      bookID: newMovieTitle,
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
                changeSelectedMovieTitle={this.changeSelectedMovieTitle}
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
