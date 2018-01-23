/**
 * @author [Bykov Denis]
 * @email [bykov_denis@icloud.com]
 * @create date 2018-01-22 06:30:34
 * @modify date 2018-01-22 06:30:34
 * @desc [transparent percent to pixels]
*/

export default function transparentToPixels(percentValue, maxPixelValue) {
  return Math.round((percentValue * maxPixelValue) / 100);
}
