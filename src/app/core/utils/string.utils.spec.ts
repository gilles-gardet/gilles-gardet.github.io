import { EMPTY_STRING } from '@core/utils/string.utils';

describe('StringUtils', (): void => {
  it('should return an empty string from the EMPTY_STRIGN const', () => {
    expect(EMPTY_STRING).toEqual('');
  });
});
