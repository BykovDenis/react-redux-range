/**
 * @author [Bykov Denis]
 * @email [bykov_denis@icloud.com]
 * @create date 2018-01-18 02:01:23
 * @modify date 2018-01-18 02:01:23
 * @desc [description]
*/
import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

export default function ProgressBar(props) {
  const styleProgressFiled = {
    left: `${props.value[0]}%`,
    width: `${props.value[1]}%`,
  };
  console.log(props.min, props.max);
  return (
    <div className={styles['progress-bar']}>
      <div className={styles['progress-bar--filled']} style={styleProgressFiled} />
    </div>
  );
}

ProgressBar.defaultProps = {
  min: 0,
  max: 100,
  value: []
};

ProgressBar.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.shape.isRequired,
};
