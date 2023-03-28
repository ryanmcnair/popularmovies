import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  Card, Button, Overlay, Tooltip,
} from 'react-bootstrap';

export default function MovieCard({ movieObj, handleSubmit }) {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const handleChange = (e) => {
    handleSubmit(e);
    setShow(!show);
  };

  return (
    <div>
      <Card
        style={{
          width: '18rem',
          height: '26rem',
          margin: '5px',
          alignContent: 'center',
        }}
      >
        {movieObj.isFavorite ? (
          <Button variant="danger" onClick={(e) => handleChange(e)}>
            Remove
          </Button>
        ) : (
          <Button variant="primary" ref={target} onClick={(e) => handleChange(e)}>
            Favorite
          </Button>
        )}
        <Overlay target={target.current} show={show} placement="top">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              Added to Favorites
            </Tooltip>
          )}
        </Overlay>
        <h5>{movieObj.title}</h5>
        <ul>
          <li>{movieObj.overview}</li>
        </ul>
      </Card>
    </div>
  );
}

MovieCard.propTypes = {
  movieObj: PropTypes.shape({
    title: PropTypes.string,
    overview: PropTypes.string,
    isFavorite: PropTypes.bool,
  }).isRequired,
  handleSubmit: PropTypes.shape({
    handleSubmit: PropTypes.func,
  }).isRequired,
};
