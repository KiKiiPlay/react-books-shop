import { Card, Button } from "react-bootstrap";
import "./component_css/cutText.css";
import { useState } from "react";
import CommentArea from "./CommentArea";

const Book = ({ cover, title, price, category, id }) => {
  const [showComment, setShowComment] = useState(false);

  const handleClick = () => {
    setShowComment(!showComment);
  };
  return (
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
          <Button variant="primary" onClick={handleClick}>
            BUY IT
          </Button>
          {showComment ? <CommentArea bookId={id} /> : <></>}
        </Card.Body>
      </Card>
    </>
  );
};

export default Book;
