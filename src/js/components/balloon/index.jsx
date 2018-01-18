import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

export default function Balloon(props) {
  return (
    <div className={styles['balloon']}>
      {props.label}
    </div>
  );
}

Balloon.defaultProps = {
  label: ''
};

Balloon.propTypes = {
  label: PropTypes.string.isRequired
};
