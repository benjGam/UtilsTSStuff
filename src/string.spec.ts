import { StringUtils } from './string';

describe('String utils Tests', () => {
  it('should return 5 !', () => {
    expect(StringUtils.getFirstLastIndexOf('Hello', 'o')).toBe(4);
  });

  it('should return Hello !', () => {
    expect(StringUtils.safeSlice('Hello', 5, 3)).toBe('lo');
  });
});
