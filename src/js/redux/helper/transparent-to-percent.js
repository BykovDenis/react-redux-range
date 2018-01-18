  /**
   * helper processed DOM coords
   * @param {*} min
   * @param {*} max
   * @param {*} value
   */
  export default function transparentToPercent(min, max, interval) {
    const percentWidth = 100;
    // const pxMin = (min * pxWidth) / 100;
    // const pxMax = (max * pxWidth) / 100;
    const percentValueFrom = (interval[0] * percentWidth) / 100;
    const percentValueTo = (interval[1] * percentWidth) / 100;
    return {
      left: percentValueFrom,
      right: percentValueTo,
      width: percentValueTo - percentValueFrom,
    };
  }
