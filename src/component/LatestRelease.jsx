import { Container, Row, Col } from "react-bootstrap";
import Book from "./Book";
import books from "./horror.json";

const LatestRelease = () => (
  <>
    <Container>
      <Row className="d-flex">
        <Col>
          <Book
            cover={books[0].img}
            title={books[0].title}
            price={books[0].price}
            category={books[0].category}
          />
          <Book />
          <Book />
        </Col>
        <Col>
          <Book />
          <Book />
          <Book />
        </Col>
        <Col>
          <Book />
          <Book />
          <Book />
        </Col>
      </Row>
    </Container>
  </>
);

export default LatestRelease;
