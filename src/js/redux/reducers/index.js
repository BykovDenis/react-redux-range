/**
 * Created by Denis on 18.04.2017.
 */
import handleActions from 'redux-actions/lib/handleActions';
import initialState from '../initialState';
import {
  SET_MARKER_NEW_POSITION_FROM_DOTS,
  SET_MIN_MARKER_NEW_POSITION,
  SET_MAX_MARKER_NEW_POSITION,
  MARKER_MIN_MOVE,
  MARKER_MAX_MOVE,
  INITIALIZE_RANGE,
  INIT_WIDTH_CONTAINER
} from '../constants';


export default handleActions({
  [SET_MARKER_NEW_POSITION_FROM_DOTS]: (state, action) => ({
    ...state,
    ...action.payload
  }),
  [INIT_WIDTH_CONTAINER]: (state, action) => ({
    ...state,
    values: {
      ...state.values,
      widthContainer: action.payload.widthContainer,
      posXContainer: action.payload.posXContainer,
    }
  }),
  [SET_MIN_MARKER_NEW_POSITION]: (state, action) => ({
    ...state,
    values: {
      ...state.values,
      percentValue: action.payload.percentValue,
      interval: action.payload.interval,
    },
    minMarker: {
      ...state.minMarker,
      posX: action.payload.posX,
      percentX: action.payload.percentX,
      editing: action.payload.flag,
    }
  }),
  [SET_MAX_MARKER_NEW_POSITION]: (state, action) => ({
    ...state,
    values: {
      ...state.values,
      percentValue: action.payload.percentValue,
      interval: action.payload.interval,
    },
    maxMarker: {
      ...state.maxMarker,
      posX: action.payload.posX,
      percentX: action.payload.percentX,
      editing: action.payload.flag,
    }
  }),
  [MARKER_MIN_MOVE]: (state, action) => ({
    ...state,
    minMarker: {
      ...state.minMarker,
      posX: action.payload.posX,
      editing: action.payload.flag,
    }
  }),
  [MARKER_MAX_MOVE]: (state, action) => ({
    ...state,
    maxMarker: {
      ...state.maxMarker,
      posX: action.payload.posX,
      editing: action.payload.flag,
    }
  }),
  [INITIALIZE_RANGE]: (state, action) => ({
    ...state,
    values: {
      ...state.values,
      ...action.payload,
    },
    minMarker: {
      ...state.minMarker,
      percentX: action.payload.percentValue[0],
    },
    maxMarker: {
      ...state.maxMarker,
      percentX: action.payload.percentValue[1],
    }
  })
}, initialState);
