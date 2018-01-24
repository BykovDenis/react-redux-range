import React from 'react';
import PropTypes from 'prop-types';
import Balloon from '../balloon';
import styles from './index.scss';

export default function Dot(props) {
  const diameterMarker = 5;
  const borderSize = 5;
  const positionMarker = {
    width: `${diameterMarker}px`,
    height: `${diameterMarker}px`,
    border: `${borderSize}px solid rgba(0, 0, 0, .6)`,
    left: `${props.position}%`,
    padding: 0,
    outline: 0,
  };
  const handleClickDot = () => {
    props.setMarkerNewPositionFromDots(props.position);
  };
  return (
    <button className={styles['dot']} style={positionMarker} onClick={handleClickDot}>
      <Balloon label={props.label} />
    </button>
  );
}

Dot.defaultProps = {
  position: 0,
  label: 0,
  setMarkerNewPositionFromDots: () => {},
};

Dot.propTypes = {
  position: PropTypes.number.isRequired,
  label: PropTypes.number.isRequired,
  setMarkerNewPositionFromDots: PropTypes.func.isRequired,
};
