/**
 * @author [Bykov Denis]
 * @email [bykov_denis@icloud.com]
 * @create date 2018-01-18 02:01:23
 * @modify date 2018-01-18 02:01:23
 * @desc [description]
*/
import React from 'react';
import PropTypes from 'prop-types';
import Marker from '../marker';
import styles from './index.scss';

export default class ProgressBar extends React.Component {
  render() {
    const { values } = this.props;
    const styleProgressFill = {
      left: `${values.left}%`,
      width: `${values.width}%`
    };
    return (
      <div className={styles['progress-bar']}>
        <Marker position={values.left} type="min" />
        <div className={styles['progress-bar--filled']} style={styleProgressFill} />
        <Marker position={values.left + values.width} type="max" />
      </div>
    );
  }
}

ProgressBar.defaultProps = {
  values: {}
};

ProgressBar.propTypes = {
  values: PropTypes.shape.isRequired,
};
