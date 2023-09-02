import { BooleanUtils } from '@core/utils/boolean.utils';

describe('BooleanUtils', (): void => {
  it('should return a boolean from a string', (): void => {
    const result1 = BooleanUtils.stringToBoolean('test');
    expect(result1).toBeTruthy();
    const result2 = BooleanUtils.stringToBoolean('true');
    expect(result2).toBeTruthy();
    const result3 = BooleanUtils.stringToBoolean('yes');
    expect(result3).toBeTruthy();
    const result4 = BooleanUtils.stringToBoolean('1');
    expect(result4).toBeTruthy();
    const result5 = BooleanUtils.stringToBoolean('false');
    expect(result5).toBeFalsy();
    const result6 = BooleanUtils.stringToBoolean('no');
    expect(result6).toBeFalsy();
    const result7 = BooleanUtils.stringToBoolean('0');
    expect(result7).toBeFalsy();
    const result8 = BooleanUtils.stringToBoolean(null as any);
    expect(result8).toBeFalsy();
  });
});
