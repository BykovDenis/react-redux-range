import React from 'react';
import PropTypes from 'prop-types';
import Balloon from '../balloon';
import styles from './index.scss';

export default function Marker(props) {
  const positionMarker = {
    left: `${props.position}%`
  };
  const handleBeginMoveMarker = (e) => {
    props.markerMove(e.pageX, true);
  };
  return (
    <div>
      <button
        type="button"
        className={styles['marker']}
        style={positionMarker}
        onMouseDown={handleBeginMoveMarker}
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
