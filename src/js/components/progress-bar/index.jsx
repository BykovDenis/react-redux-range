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
import Dot from '../dot';
import styles from './index.scss';

export default class ProgressBar extends React.Component {
  render() {
    const { values } = this.props;
    const styleProgressFill = {
      left: `${values.left}%`,
      width: `${values.width}%`
    };
    let dots;
    if (values) {
      if (values.percentDots) {
        const arrDots = values.dots;
        dots = values.percentDots.map((elem, index) =>
          <Dot key={elem + Math.random()} position={elem} label={arrDots[index]} />);
      }
      dots.unshift(<Dot key={Math.random()} position={values.percentMin} label={values.min} />);
      dots.push(<Dot key={Math.random()} position={values.percentMax} label={values.max} />);
    }
    return (
      <div className={styles['progress-bar']}>
        {dots}
        <Marker position={values.left} type="min" label={values.interval[0]} />
        <div className={styles['progress-bar--filled']} style={styleProgressFill} />
        <Marker
          position={values.left + values.width}
          label={values.interval[1]}
          type="max"
        />
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
