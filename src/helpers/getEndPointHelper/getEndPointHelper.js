/**
 * This helper is used to provide end point of the container
 *
 * @param {string} endPoint - current point of the container
 * @param - end point of the container
 */
export const getEndPointHelper = (endPoint) =>
  endPoint > 0 ?
  0 :
  endPoint;
