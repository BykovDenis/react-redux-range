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
  constructor(props) {
    super(props);
    this.handleFinishedMoveMarker = this.handleFinishedMoveMarker.bind(this);
  }
  componentDidMount() {
    const widthContainer = this.el.getBoundingClientRect().width;
    const posXContainer = this.el.getBoundingClientRect().x;
    this.props.initWidthContainer({ widthContainer, posXContainer });
  }
  handleFinishedMoveMarker(e) {
    this.props.setMarkerNewPosition(e.pageX);
  }
  render() {
    const { values } = this.props;
    const styleProgressFill = {
      left: `${values.percentValue[0]}%`,
      width: `${values.percentValue[1] - values.percentValue[0]}%`
    };
    let dots;
    if (values) {
      if (values.percentDots) {
        const arrDots = values.dots;
        dots = values.percentDots.map((elem, index) =>
          <Dot key={elem + Math.random()} position={elem} label={arrDots[index]} />);
      }
      if (dots) {
        dots.unshift(<Dot key={Math.random()} position={values.percentMin} label={values.min} />);
        dots.push(<Dot key={Math.random()} position={values.percentMax} label={values.max} />);
      }
    }
    return (
      <div className={styles['progress-bar']} ref={el => this.el = el} onMouseUp={this.handleFinishedMoveMarker}>
        <div className={styles['progress-bar__line']}>
          {dots}
          <Marker
            position={values.percentValue[0]}
            label={values.interval[0]}
            markerMove={this.props.markerMinMove}
          />
          <div className={styles['progress-bar__line--filled']} style={styleProgressFill} />
          <Marker
            position={values.percentValue[1]}
            label={values.interval[1]}
            markerMove={this.props.markerMaxMove}
          />
        </div>
      </div>
    );
  }
}

ProgressBar.defaultProps = {
  values: {
    percentValue: [0, 0],
  },
  markerMinMove: () => {},
  markerMaxMove: () => {},
  setMarkerNewPosition: () => {},
  initWidthContainer: () => {},
};

ProgressBar.propTypes = {
  values: PropTypes.object.isRequired,
  markerMinMove: PropTypes.func.isRequired,
  markerMaxMove: PropTypes.func.isRequired,
  setMarkerNewPosition: PropTypes.func.isRequired,
  initWidthContainer: PropTypes.func.isRequired,
};
