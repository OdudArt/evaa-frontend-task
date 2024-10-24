import { roundNum } from '@/utils';
import { useMemo } from 'react';

interface UseCompoundInterestProps {
  value?: number;
  rate?: number;
  months?: number;
}
const compoundInterest = ({ value, rate, months }: UseCompoundInterestProps) => {
  if (!value || !rate || !months) return 0;
  const period = 12;
  const duration = months / 12;
  const amount = value * Math.pow(1 + rate / period, period * duration);
  return roundNum(amount);
};

const useCompoundInterest = (props: UseCompoundInterestProps) => useMemo(() => compoundInterest(props), [props]);

export { compoundInterest, useCompoundInterest };
