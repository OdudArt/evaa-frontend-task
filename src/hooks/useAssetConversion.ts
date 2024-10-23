import { AssetType } from '@/types';
import { isEmpty, roundNum } from '@/utils';
import { PoolAssetConfig, PriceData } from '@evaafi/sdk';
import { useMemo } from 'react';

interface UseAssetConversionProps {
  prices?: PriceData;
  asset?: PoolAssetConfig;
  value?: string | number;
  assetType: AssetType;
}
const useAssetConversion = ({ prices, asset, value, assetType }: UseAssetConversionProps) =>
  useMemo(() => {
    if (isEmpty(prices) || isEmpty(asset) || !value) return 0;

    const assetPrice = prices?.dict.get(asset!.assetId);
    const priceScaleFactor = BigInt(1e9);
    const price = Number(assetPrice) / Number(priceScaleFactor);

    if (assetType === 'fiat') return roundNum(Number(value) / price);

    return roundNum(Number(value) * price);
  }, [prices, asset, value, assetType]);

export default useAssetConversion;
