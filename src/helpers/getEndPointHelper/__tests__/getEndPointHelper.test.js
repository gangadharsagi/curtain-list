import { getEndPointHelper } from '../getEndPointHelper';

describe('getEndPointHelper', () => {
  it('should return 0 if endpoint ', () => {
    const mockEndPoint = 2;
    const expected = getEndPointHelper(mockEndPoint);
    const result = 0;
    expect(expected).toEqual(result);
  });

  it('should return value if it is less than 0 ', () => {
    const mockEndPoint = -2;
    const expected = getEndPointHelper(mockEndPoint);
    expect(expected).toEqual(mockEndPoint);
  });
});
