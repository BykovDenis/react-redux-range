/**
 * @author [Bykov Denis]
 * @email [bykov_denis@icloud.com]
 * @create date 2018-01-18 12:28:20
 * @modify date 2018-01-18 04:47:14
 * @desc [description]
*/

const initialState = {
  values: {
    min: 0,
    max: 120,
    interval: [0, 80],
    dots: [20, 35, 60, 75, 95],
    percentValue: [0, 0],
    widthContainer: 0,
    posXContainer: 0,
  },
  minMarker: {
    posX: 0,
    percentX: 0,
    editing: false,
  },
  maxMarker: {
    posX: 0,
    percentX: 0,
    editing: false,
  }
};

export default initialState;
