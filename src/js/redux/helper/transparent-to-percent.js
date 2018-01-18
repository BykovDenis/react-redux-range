  /**
   * helper processed DOM coords
   * @param {*} min
   * @param {*} max
   * @param {*} value
   */
  export default function transparentToPercent(min, max, interval, dots) {
    const percentMin = Math.round((min * 100) / max);
    const percentMax = Math.round((max * 100) / max);
    const percentValueFrom = Math.round((interval[0] * 100) / max);
    const percentValueTo = Math.round((interval[1] * 100) / max);
    const percentDots = dots.map(elem => (elem * 100) / max);
    return {
      left: percentValueFrom,
      right: percentValueTo,
      width: percentValueTo - percentValueFrom,
      percentDots,
      percentMin,
      percentMax,
    };
  }
