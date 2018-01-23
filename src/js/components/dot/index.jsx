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
    left: `${props.position}%`
  };
  return (
    <div className={styles['dot']} style={positionMarker}>
      <Balloon label={props.label} />
    </div>
  );
}

Dot.defaultProps = {
  position: 0,
  label: 0,
};

Dot.propTypes = {
  position: PropTypes.number.isRequired,
  label: PropTypes.number.isRequired,
};
