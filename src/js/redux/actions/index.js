/**
 * @author [Bykov Denis]
 * @email [bykov_denis@icloud.com]
 * @create date 2018-01-18 01:09:45
 * @modify date 2018-01-18 01:09:45
 * @desc [description]
*/

import {
  SET_MIN_MARKER_NEW_POSITION,
  SET_MAX_MARKER_NEW_POSITION,
  MARKER_MIN_MOVE,
  MARKER_MAX_MOVE,
  INITIALIZE_RANGE,
  INIT_WIDTH_CONTAINER
} from '../constants';

import { transparentToPercent, convertPXToPercent } from '../helper/transparent-to-percent';

/**
 * detect offset component relation vieport
 * @param {*} posX
 */
export const initWidthContainer = container => dispatch =>
  dispatch({ type: INIT_WIDTH_CONTAINER, payload: container });

export const initializeRange = () => (dispatch, getState) => {
  const state = getState().Range.values;
  dispatch({
    type: INITIALIZE_RANGE,
    payload: transparentToPercent(state.min, state.max, state.interval, state.dots)
  });
};

export const markerMinMove = (posX, flag) => (dispatch) => {
  dispatch({ type: MARKER_MIN_MOVE, payload: { posX, flag } });
};

export const markerMaxMove = (posX, flag) => (dispatch) => {
  dispatch({ type: MARKER_MAX_MOVE, payload: { posX, flag, } });
};

export const setMarkerNewPosition = (posX, flag) => (dispatch, getState) => {
  const state = getState().Range;
  const minMarker = state.minMarker;
  const maxMarker = state.maxMarker;
  if (minMarker.editing && !maxMarker.editing) {
    const percentX = convertPXToPercent(posX, state.values.widthContainer,
      state.values.posXContainer);
    dispatch({
      type: SET_MIN_MARKER_NEW_POSITION,
      payload: { posX, percentX, flag },
    });
  }
  if (maxMarker.editing && !minMarker.editing) {
    const percentX = convertPXToPercent(posX, state.values.widthContainer,
      state.values.posXContainer);
    dispatch({
      type: SET_MAX_MARKER_NEW_POSITION,
      payload: { posX, percentX, flag },
    });
  }
};
