import { Component } from "react";
import Card from "react-bootstrap/Card";

class CommentArea extends Component {
  render() {
    return (
      <>
        <h2>Comments</h2>
        <Card>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
      </>
    );
  }
}

export default CommentArea;
