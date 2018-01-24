/**
 * @author [Bykov Denis]
 * @email [bykov_denis@icloud.com]
 * @create date 2018-01-18 01:09:45
 * @modify date 2018-01-18 01:09:45
 * @desc [description]
*/

import {
  SET_MARKER_NEW_POSITION_FROM_DOTS,
  SET_MIN_MARKER_NEW_POSITION,
  SET_MAX_MARKER_NEW_POSITION,
  MARKER_MIN_MOVE,
  MARKER_MAX_MOVE,
  INITIALIZE_RANGE,
  INIT_WIDTH_CONTAINER
} from '../constants';

import { transparentToPercent, convertPXToPercent } from '../helper/transparent-to-percent';
import searchNearestRoute from '../helper/search-nearest-route';
import transparentToPixels from '../helper/transparent-to-pixels';

/**
 * detect offset component relation vieport
 * @param {*} posX
 */
export const initWidthContainer = container => dispatch =>
  dispatch({ type: INIT_WIDTH_CONTAINER, payload: container });

export const initializeRange = () => (dispatch, getState) => {
  const state = getState().Range.values;
  const values = transparentToPercent(state.min, state.max, state.interval, state.dots);
  values.percentValue = [
    searchNearestRoute(values.percentValue[0], values.percentDots),
    searchNearestRoute(values.percentValue[1], values.percentDots)
  ];
  dispatch({
    type: INITIALIZE_RANGE,
    payload: values
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
  let percentValue = state.values.percentValue;
  const max = state.values.max;
  if (minMarker.editing && !maxMarker.editing) {
    // return value of percent
    const percentX = convertPXToPercent(posX, state.values.widthContainer,
      state.values.posXContainer);
    let lastElement = percentValue[1];
    // return near value of array values
    let x;
    if (!flag) {
      x = searchNearestRoute(percentX, state.values.percentDots);
      lastElement = searchNearestRoute(lastElement, state.values.percentDots);
    } else {
      x = percentX;
    }
    percentValue = lastElement < x ? [lastElement, x] : [x, lastElement];
    const interval = [transparentToPixels(x, max), transparentToPixels(lastElement, max)];
    dispatch({
      type: SET_MIN_MARKER_NEW_POSITION,
      payload: { posX, percentX: x, flag, percentValue, interval },
    });
  }
  if (maxMarker.editing && !minMarker.editing) {
    const percentX = convertPXToPercent(posX, state.values.widthContainer,
      state.values.posXContainer);
    let firstElement = percentValue[0];
    // return near value of array values
    let x;
    if (!flag) {
      x = searchNearestRoute(percentX, state.values.percentDots);
      firstElement = searchNearestRoute(firstElement, state.values.percentDots);
    } else {
      x = percentX;
    }
    percentValue = firstElement > x ? [x, firstElement] : [firstElement, x];
    const interval = [transparentToPixels(firstElement, max), transparentToPixels(x, max)];
    dispatch({
      type: SET_MAX_MARKER_NEW_POSITION,
      payload: { posX, percentX: x, flag, percentValue, interval },
    });
  }
};

export const setMarkerNewPositionFromDots = position => (dispatch, getState) => {
  const stateValues = getState().Range.values;
  const percentValue = stateValues.percentValue;
  const diffMin = Math.abs(position - percentValue[0]);
  const diffMax = Math.abs(position - percentValue[1]);
  const marker = {
    posX: searchNearestRoute(position, stateValues.percentDots),
    percentX: position,
    editing: false,
  };
  const pxPosition = transparentToPixels(position, stateValues.max);
  const values = {
    ...stateValues,
    interval: diffMax < diffMin ?
    [stateValues.interval[0], pxPosition] :
    [pxPosition, stateValues.interval[1]],
    percentValue: diffMax < diffMin ?
      [percentValue[0], position] :
      [position, percentValue[1]]
  };
  dispatch({
    type: SET_MARKER_NEW_POSITION_FROM_DOTS,
    payload: diffMax < diffMin ? { values, maxMarker: { ...marker } } :
      { values, minMarker: { ...marker } }
  });
};
