  /**
   * helper processed DOM coords
   * @param {*} min
   * @param {*} max
   * @param {*} value
   */
  export function transparentToPercent(min, max, interval, dots) {
    const percentMin = Math.round((min * 100) / max);
    const percentMax = Math.round((max * 100) / max);
    const percentValueFrom = Math.round((interval[0] * 100) / max);
    const percentValueTo = Math.round((interval[1] * 100) / max);
    const percentDots = dots.map(elem => Math.round((elem * 100) / max));
    return {
      percentValue: [percentValueFrom, percentValueTo],
      width: percentValueTo - percentValueFrom,
      percentDots,
      percentMin,
      percentMax,
    };
  }

  export function convertPXToPercent(posX, widthContainer, correction) {
    const percent = ((posX - correction) * 100) / widthContainer;
    return Math.round(percent);
  }
