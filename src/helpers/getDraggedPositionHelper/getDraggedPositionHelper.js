import { CONTAINER_PROPS } from '../../constants/CONTAINER_PROPS';
import { getEndPointHelper } from '../getEndPointHelper';

/**
 * This helper is used to provide the value of the dragged position
 * based on the element and position
 *
 * @param {Object} element - current element details
 * @param {string} position - current position
 * @returns - dragging position
 */
export const getDraggedPositionHelper = (element, position) =>
  (element.offsetTop - position <= -CONTAINER_PROPS.HEIGHT) ?
  -CONTAINER_PROPS.HEIGHT :
  getEndPointHelper(element.offsetTop - position);

