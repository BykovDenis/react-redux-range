/**
 * @author [Bykov Denis]
 * @email [bykov_denis@icloud.com]
 * @create date 2018-01-18 01:09:45
 * @modify date 2018-01-18 01:09:45
 * @desc [description]
*/

import {
  NEXT_SITE_SLIDE,
  TYPE_PORTFOLIO,
  NEXT_SPA_SLIDE,
  INITIALIZE_RANGE
} from '../constants';

import transparentToPercent from '../helper/transparent-to-percent';

export const initializeRange = () => (dispatch, getState) => {
  const state = getState().Range.values;
  dispatch({
    type: INITIALIZE_RANGE,
    payload: transparentToPercent(state.min, state.max, state.interval, state.dots)
  });
};

/* перелистывание слайдов страниц верстки */
export const nextSiteStep = sign => (dispatch, getState) => {
  const state = getState().Portfolio;
  let step = state.siteStep;
  if (sign === 'add') {
    step = step >= 5 ? 0 : step + 1;
  } else if (sign === 'sub') {
    step = step >= 1 ? step - 1 : 5;
  }
  dispatch({ type: NEXT_SITE_SLIDE, payload: step });
};

/* перелистывание слайдов страниц SPA */
export const nextSPAStep = sign => (dispatch, getState) => {
  const state = getState().Portfolio;
  let step = state.spaStep;
  if (sign === 'add') {
    step = step >= 2 ? 0 : step + 1;
  } else if (sign === 'sub') {
    step = step >= 1 ? step - 1 : 2;
  }
  dispatch({ type: NEXT_SPA_SLIDE, payload: step });
};

/** Переключение типа портфолио компонентов и страничек */
export const changeType = type => dispatch => dispatch({ type: TYPE_PORTFOLIO, payload: type });

