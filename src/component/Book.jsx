import { Card, Button } from "react-bootstrap";
import "./component_css/cutText.css";

const Book = ({ cover, title, price, category }) => (
  <>
    <Card>
      <Card.Img
        variant="top"
        src={cover}
        style={{ width: "100%", height: "300px" }}
      />
      <Card.Body>
        <Card.Title className="textCut">{title}</Card.Title>
        <Card.Text>Category: {category}</Card.Text>
        <Card.Text>{price} $</Card.Text>
        <Button variant="primary">BUY IT</Button>
      </Card.Body>
    </Card>
  </>
);

export default Book;
