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

export default class ProgressBar extends React.Component {
  componentWillMount() {
    const { props } = this;
    this.coords = this.transparentToPixels(props.min, props.max, props.value);
  }
  /**
   * helper processed DOM coords
   * @param {*} min
   * @param {*} max
   * @param {*} value
   */
  transparentToPixels(min, max, value) {
    const percentWidth = 100;
    // const pxMin = (min * pxWidth) / 100;
    // const pxMax = (max * pxWidth) / 100;
    const percentValueFrom = (value[0] * percentWidth) / 100;
    const percentValueTo = (value[1] * percentWidth) / 100;
    return {
      left: `${percentValueFrom}%`,
      width: `${percentValueTo - percentValueFrom}%`,
    };
  }
  render() {
    return (
      <div className={styles['progress-bar']}>
        <div className={styles['progress-bar--filled']} style={this.coords} />
      </div>
    );
  }
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
