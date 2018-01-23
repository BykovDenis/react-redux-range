/**
 * @author [Bykov Denis]
 * @email [bykov_denis@icloud.com]
 * @create date 2018-01-18 01:09:24
 * @modify date 2018-01-18 01:09:24
 * @desc [description]
*/

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions';
import ProgressBar from '../components/progress-bar';
import styles from './range.scss';

class Range extends React.Component {
  componentWillMount() {
    this.props.initializeRange();
  }
  render() {
    const { props } = this;
    return (
      <div className={styles['date-line-panel']}>
        <ProgressBar
          values={props.values}
          markerMinMove={props.markerMinMove}
          markerMaxMove={props.markerMaxMove}
          setMarkerNewPosition={props.setMarkerNewPosition}
          initWidthContainer={props.initWidthContainer}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.Range;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Range);
