import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

export default function MovieCard({ movieObj, handleSubmit }) {
  return (
    <>
      <Card
        style={{
          width: '18rem',
          height: '26rem',
          margin: '5px',
          alignContent: 'center',
        }}
      >
        <Button onClick={handleSubmit}>Favorite</Button>
        <h5>{movieObj.title}</h5>
        <ul>
          <li>{movieObj.overview}</li>
        </ul>
      </Card>
    </>
  );
}

MovieCard.propTypes = {
  movieObj: PropTypes.shape({
    title: PropTypes.string,
    overview: PropTypes.string,
  }).isRequired,
  // eslint-disable-next-line react/require-default-props
  handleSubmit: PropTypes.func,
};
