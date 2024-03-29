import { makeColorFromString } from './index';

describe('utils: test "invertColor"', () => {
  it('inverts HEX color successfully', () => {
    expect(makeColorFromString('kshaddix')).toBe('#884190');
    expect(makeColorFromString('leonid460')).toBe('#3430db');
  });
});
