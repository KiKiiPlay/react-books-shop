import { Card, Button } from "react-bootstrap";
import "./component_css/cutText.css";
import { useState } from "react";

const Book = ({ cover, title, price, category }) => {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <Card
        onClick={() => setSelected(!this.state.selected)}
        style={{
          border: selected ? "3px red solid" : "none",
        }}
      >
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
};

export default Book;
