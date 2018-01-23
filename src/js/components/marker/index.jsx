import React from 'react';
import PropTypes from 'prop-types';
import Balloon from '../balloon';
import styles from './index.scss';

export default function Marker(props) {
  const diameterMarker = 5;
  const borderSize = 5;
  const positionMarker = {
    width: `${diameterMarker}px`,
    height: `${diameterMarker}px`,
    border: `${borderSize}px solid rgba(66, 162, 225, .7)`,
    left: `${props.position}%`
  };
  if (props.type === 'max') {
    positionMarker.transform = `translateY(-50%) translateX(-${(borderSize * 2) + diameterMarker}px)`;
  }
  return (
    <div className={styles['marker']} style={positionMarker}>
      <Balloon label={props.label} />
    </div>
  );
}

Marker.defaultProps = {
  position: 0,
  type: 'min',
  label: '',
};

Marker.propTypes = {
  position: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
