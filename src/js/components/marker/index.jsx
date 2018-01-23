import React from 'react';
import PropTypes from 'prop-types';
import Balloon from '../balloon';
import styles from './index.scss';

export default function Marker(props) {
  const positionMarker = {
    left: `${props.position}%`
  };
  const handleBeginMoveMarker = (e) => {
    e.target.classList.add('marker--active');
    props.markerMove(e.pageX, true);
  };
  const handleFinishMoveMarker = (e) => {
    e.target.classList.remove('marker--active');
  };
  return (
    <div>
      <button
        type="button"
        className={styles['marker']}
        style={positionMarker}
        onMouseDown={handleBeginMoveMarker}
        onMouseUp={handleFinishMoveMarker}
        onMouseOut={handleFinishMoveMarker}
      >
        <Balloon label={props.label} />
      </button>
    </div>
  );
}

Marker.defaultProps = {
  position: 0,
  label: 0,
  markerMove: () => {},
};

Marker.propTypes = {
  position: PropTypes.number.isRequired,
  label: PropTypes.number.isRequired,
  markerMove: PropTypes.func.isRequired,
};
