import { getDraggedPositionHelper } from '../getDraggedPositionHelper';

describe('getDraggedPositionHelper', () => {
  it('should return offsetTop minus position', () => {
    const mockElement = {
      offsetTop: 120,
    };
    const mockPosition = 600;
    const expected = getDraggedPositionHelper(mockElement, mockPosition);
    const result = -480;
    expect(expected).toEqual(result);
  });

  it('should provide the container height', () => {
    const mockElement = {
      offsetTop: -829,
    };
    const mockPosition = -129;
    const expected = getDraggedPositionHelper(mockElement, mockPosition);
    const result = -700;
    expect(expected).toEqual(result);
  });
});
