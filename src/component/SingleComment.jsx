import { Card } from "react-bootstrap";

const SingleComment = ({ elementId, rate, comment, author }) => {
  return (
    <>
      <Card key={elementId}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{comment}</Card.Title>
          <Card.Text>{rate}</Card.Text>
          <Card.Text>{author}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleComment;
