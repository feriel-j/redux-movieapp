import React from "react";
import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { removeMovie } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  return (
    <div className="movie-card">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={movie.posterurl}
          style={{ width: 280, height: 400 }}
        />
        <Card.Body className="movie-info">
          <Card.Title>
            <h2>{movie.name}</h2>
          </Card.Title>
          <Card.Text className="description">
            <p>{movie.description}</p>
          </Card.Text>
          <ReactStars
            count={5}
            value={movie.rating}
            size={35}
            activeColor="#ffd700"
            edit={false}
          />
        </Card.Body>
        <button
          className="delete"
          onClick={() => dispatch(removeMovie({ id: movie.id }))}
        >
          Delete
        </button>
      </Card>
    </div>
  );
};

export default MovieCard;
