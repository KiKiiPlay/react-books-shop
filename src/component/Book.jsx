import { Card, Button } from "react-bootstrap";

const Book = ({ cover, title, price, category }) => (
  <>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={cover} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Category: {category}</Card.Text>
        <Card.Text>{price} $</Card.Text>
        <Button variant="primary">BUY IT</Button>
      </Card.Body>
    </Card>
  </>
);

export default Book;
