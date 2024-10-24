import { OperationType } from '@/types';
import { isEmpty } from '@/utils';
import { ExtendedAssetData } from '@evaafi/sdk';
import { useMemo } from 'react';

interface UseOperationRatetProps {
  assetData?: ExtendedAssetData;
  operationType?: OperationType;
}
const operationRate = ({ assetData, operationType }: UseOperationRatetProps) => {
  if (isEmpty(assetData) || !operationType) return 0;
  if (operationType === 'supply') return assetData?.supplyApy ?? 0;
  return assetData?.borrowApy ?? 0;
};

const useOperationRate = (props: UseOperationRatetProps) => useMemo(() => operationRate(props), [props]);

export { operationRate, useOperationRate };
