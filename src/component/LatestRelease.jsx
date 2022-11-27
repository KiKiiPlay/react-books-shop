import Book from "./Book";
import books from "./horror.json";
import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class LatestRelease extends Component {
  render() {
    return (
      <>
        <Container>
          <Row sm={2} md={3} lg={4} className="d-flex justify-content-center">
            {books.map((element) => (
              <Col key={books.asin}>
                <Book
                  cover={element.img}
                  title={element.title}
                  price={element.price}
                  category={element.category}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default LatestRelease;
