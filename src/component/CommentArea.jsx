import { Component } from "react";
import Card from "react-bootstrap/Card";

class CommentArea extends Component {
  //     fetch("https://striveschool-api.herokuapp.com/api/comments/", {
  // headers: {
  // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg0YzUwOGQ4MDNjMjAwMTVlY2VlMjIiLCJpYXQiOjE2Njk2NDU1NzYsImV4cCI6MTY3MDg1NTE3Nn0.Ud_AC9gnFJfUTtCD_pm2LgIsQw9PO56a4W_pjkdf9o4"
  // }
  // })
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
