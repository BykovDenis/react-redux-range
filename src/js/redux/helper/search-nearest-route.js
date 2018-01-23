/**
 * @author [Bykov Denis]
 * @email [bykov_denis@icloud.com]
 * @create date 2018-01-22 04:48:19
 * @modify date 2018-01-22 04:48:19
 * @desc [description]
*/

/**
 * Searching min element on an array
 * @param {*} array
 */
function getIndexMinElemArray(array) {
  return array.reduce((prevValue, elem, index) => {
    if (array[prevValue] >= elem) {
      prevValue = index;
    }
    return prevValue;
  }, 0);
}

/**
 * function return near integer value from array
 * @param {*} value
 * @param {*} array
 */
export default function searchNearestRoute(value, array) {
  const values = array.map(elem => Math.abs(elem - value));
  return array[getIndexMinElemArray(values)];
}
