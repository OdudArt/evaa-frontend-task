import { describe, expect, it } from 'vitest';
import { assetConversion } from './useAssetConversion';

const price = 5052727530n;

describe('assetConversion', () => {
  it('Should return 0 if props is undefined', () => {
    expect(assetConversion({ price: undefined, value: undefined, assetType: 'crypto' })).toBe(0);
    expect(assetConversion({ price, value: undefined, assetType: 'crypto' })).toBe(0);
  });
  it('Should return the correct conversion for fiat', () => {
    const result = assetConversion({ price, value: 10, assetType: 'crypto' });
    expect(result).toBe(50.53);
  });
  it('Should return the correct conversion for crypto', () => {
    const result = assetConversion({ price, value: 50.53, assetType: 'fiat' });
    expect(result).toBe(10);
  });
});
