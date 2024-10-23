import { OperationType } from '@/types';
import { isEmpty } from '@/utils';
import { ExtendedAssetsData } from '@evaafi/sdk';
import { useMemo } from 'react';

interface UseOperationRatetProps {
  assetId?: bigint;
  assetsData?: ExtendedAssetsData;
  operationType: OperationType;
}
const useOperationRate = ({ assetId, assetsData, operationType }: UseOperationRatetProps) =>
  useMemo(() => {
    if (isEmpty(assetsData) || !assetId) return 0;

    const selectedAssetsData = assetsData?.get(assetId);

    if (operationType === 'supply') return selectedAssetsData?.supplyApy ?? 0;
    return selectedAssetsData?.borrowApy ?? 0;
  }, [operationType, assetId, assetsData]);

export default useOperationRate;
