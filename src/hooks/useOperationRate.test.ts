import { describe, expect, it } from 'vitest';
import { operationRate } from './useOperationRate';
import { ExtendedAssetData } from '@evaafi/sdk';

const assetData = {
  borrowApy: 0.031028765134433645
} as ExtendedAssetData;

describe('operationRate', () => {
  it('Should return 0 if supplyApy is undefined', () => {
    expect(operationRate({ assetData, operationType: 'supply' })).toBe(0);
  });
});
