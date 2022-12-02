import { Component } from "react";
import Card from "react-bootstrap/Card";
import SingleComment from "./SingleComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };
  //     fetch("https://striveschool-api.herokuapp.com/api/comments/", {
  // headers: {
  // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg0YzUwOGQ4MDNjMjAwMTVlY2VlMjIiLCJpYXQiOjE2Njk2NDU1NzYsImV4cCI6MTY3MDg1NTE3Nn0.Ud_AC9gnFJfUTtCD_pm2LgIsQw9PO56a4W_pjkdf9o4"
  // }
  // })

  //   options = {
  //     headers: {
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg0YzUwOGQ4MDNjMjAwMTVlY2VlMjIiLCJpYXQiOjE2Njk2NDU1NzYsImV4cCI6MTY3MDg1NTE3Nn0.Ud_AC9gnFJfUTtCD_pm2LgIsQw9PO56a4W_pjkdf9o4",
  //     },
  //   };

  options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg0YzUwOGQ4MDNjMjAwMTVlY2VlMjIiLCJpYXQiOjE2Njk2NDU1NzYsImV4cCI6MTY3MDg1NTE3Nn0.Ud_AC9gnFJfUTtCD_pm2LgIsQw9PO56a4W_pjkdf9o4",
    },
  };

  fetchMovies = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        this.options
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({
          comments: data,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    console.log(this.props.bookID);
    return (
      <>
        <h2>Comments</h2>
        <Card>
          <Card.Body>
            {this.state.comments.map((element) => (
              <SingleComment
                elementId={element.elementId}
                rate={element.rate}
                comment={element.comment}
                author={element.author}
              />
            ))}
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default CommentArea;
