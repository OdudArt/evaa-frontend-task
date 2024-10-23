import { ReactNode, SVGProps } from 'react';
import { TonIcon, UsdtIcon } from './components/ui/icon';

type CurrencyIconType = (props: SVGProps<SVGSVGElement>) => ReactNode;

export const currencyIcon: { [key: string]: CurrencyIconType } = {
  TON: TonIcon,
  USDT: UsdtIcon
};

export function isEmpty<T extends object>(obj: T = {} as T) {
  return Object.keys(obj).length === 0;
}
export const roundNum = (num: number) => parseFloat(num.toFixed(2));
