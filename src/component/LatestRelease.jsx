import Book from "./Book";
import books from "./horror.json";
import { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

class LatestRelease extends Component {
  render() {
    return (
      <>
        <Container>
          <Row sm={2} md={3} lg={4} className="d-flex justify-content-center">
            {books.map((element) => (
              <Col key={element.asin}>
                <Card onClick={() => this.props.changeID(element.asin)}>
                  <Book
                    cover={element.img}
                    title={element.title}
                    price={element.price}
                    category={element.category}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default LatestRelease;
