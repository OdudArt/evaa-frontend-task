import { roundNum } from '@/utils';
import { useMemo } from 'react';

interface UseCompoundInterestProps {
  value: number;
  rate: number;
  months: number;
}
const useCompoundInterest = ({ value, rate, months }: UseCompoundInterestProps) =>
  useMemo(() => {
    const period = 12;
    const duration = months / 12;
    const amount = value * Math.pow(1 + rate / period, period * duration);

    return roundNum(amount);
  }, [value, rate, months]);

export default useCompoundInterest;
