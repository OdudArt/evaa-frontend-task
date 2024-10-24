import { AssetType } from '@/types';
import { roundNum } from '@/utils';
import { useMemo } from 'react';

interface AssetConversionProps {
  price?: bigint;
  value?: string | number;
  assetType: AssetType;
}

const assetConversion = ({ price, value, assetType }: AssetConversionProps) => {
  if (!price || !value) return 0;
  const priceScaleFactor = BigInt(1e9);
  const assetPrice = Number(price) / Number(priceScaleFactor);

  if (assetType === 'fiat') return roundNum(Number(value) / assetPrice);

  return roundNum(Number(value) * assetPrice);
};

const useAssetConversion = (props: AssetConversionProps) => useMemo(() => assetConversion(props), [props]);

export { assetConversion, useAssetConversion };
