import { describe, expect, it } from 'vitest';
import { compoundInterest } from './useCompoundInterest';

const rate = 0.006327077431124817;

describe('compoundInterest', () => {
  it('Should return 0 if props is undefined', () => {
    expect(compoundInterest({ value: undefined, rate: undefined, months: undefined })).toBe(0);
  });
  it('Should return the correct interest', () => {
    const result = compoundInterest({ rate, value: 100, months: 6 });
    expect(result).toBe(100.32);
  });
});
