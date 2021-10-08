import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/movieSlice";

const AddMovie = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    id: Math.random(),
    name: "",
    posterurl: "",
    description: "",
    rating: "",
    trailer: "",
  });

  return (
    <div>
      <Button className="btn-add" variant="primary" onClick={handleShow}>
        Add New Movie
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="add-movie">
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body className="add-movie">
          <div>
            <div>
              <label className="input">Title:</label>
              <input
                type="text"
                name="name"
                onChange={(e) => setTask({ ...task, name: e.target.value })}
              />
            </div>
            <div>
              <label className="input">Image:</label>
              <input
                type="text"
                name="posterurl"
                onChange={(e) =>
                  setTask({ ...task, posterurl: e.target.value })
                }
              />
            </div>
            <div>
              <label className="input">Rating:</label>
              <input
                type="number"
                name="rating"
                onChange={(e) => setTask({ ...task, rating: e.target.value })}
              />
            </div>
            <div>
              <label className="input">Description:</label>
              <input
                type="text"
                name="descreption"
                onChange={(e) =>
                  setTask({ ...task, description: e.target.value })
                }
              />
            </div>
            <div>
              <label className="input">trailer:</label>
              <input
                type="text"
                name="trailer"
                onChange={(e) => setTask({ ...task, trailer: e.target.value })}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="add-movie">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              dispatch(addMovie(task));
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
