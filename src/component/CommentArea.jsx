import { Component } from "react";
import Card from "react-bootstrap/Card";
import SingleComment from "./SingleComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };
  options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2FlYzMxNWRlM2E0ODAwMTVlODQxNjkiLCJpYXQiOjE2NzIzOTc1ODksImV4cCI6MTY3MzYwNzE4OX0.wkLCkwi63yAjSRVU6pBIGsYkbUMCYY0e9EAXpEGNsl8",
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
    const neededComments = this.state.comments.filter(
      (element) => element.elementId === this.props.bookID
    );
    console.log("niiiiigeers", this.props.bookID);
    return (
      <>
        <h2>Comments</h2>
        <Card>
          <Card.Body>
            {neededComments.map((element) => (
              <SingleComment
                elementId={element.elementId}
                rate={element.rate}
                comment={element.comment}
                author={element.author}
                bookID={this.props.bookID}
              />
            ))}
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default CommentArea;
