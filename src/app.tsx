import { useEffect, useMemo, useState } from 'react';
import { Logo } from './components/Logo';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { Button } from './components/ui/button';
import { Tabs, TabsList, TabsTrigger } from './components/ui/tabs';
import { Input } from './components/ui/input';
import { ArrowDownUp, CirclePlusIcon, Upload } from 'lucide-react';
import { EvaaApi } from './api';
import { apiConfig } from './configs';
import { ExtendedAssetsData, TESTNET_POOL_CONFIG, PoolAssetConfig } from '@evaafi/sdk';
import { currencyIcon, roundNum } from './utils';
import { AssetType, OperationType } from './types';
import clsx from 'clsx';
import { useAssetConversion } from './hooks/useAssetConversion';
import { Dictionary } from '@ton/core';
import { useCompoundInterest } from './hooks/useCompoundInterest';

const evaaApi = new EvaaApi(apiConfig);

export default function App() {
  const [assets] = useState(
    TESTNET_POOL_CONFIG.poolAssetsConfig.filter((asset) => asset.name === 'stTON' || asset.name === 'TON')
  );
  const durations: number[] = [1, 6];
  const operationsTypes: OperationType[] = ['supply', 'borrow'];

  const [value, setValue] = useState<string>('');
  const [pricesDict, setPricesDict] = useState<Dictionary<bigint, bigint>>();
  const [assetsDict, setAssetsDict] = useState<ExtendedAssetsData>();
  const [selectedAsset, setSelectedAsset] = useState<PoolAssetConfig>(assets[0]);
  const [selectedAssetType, setSelectedAssetType] = useState<AssetType>('crypto');
  const [selectedOperationType, setSelectedOperationType] = useState<OperationType>('supply');
  const [selectedDuration, setSelectedDuration] = useState<number>(durations[0]);

  const selectedAssetPrice = useMemo(() => pricesDict?.get(selectedAsset.assetId), [pricesDict, selectedAsset]);
  const selectedAssetData = useMemo(() => assetsDict?.get(selectedAsset.assetId), [assetsDict, selectedAsset]);

  useEffect(() => {
    evaaApi.getSync().then((res) => setAssetsDict(res?.assetsData));
    evaaApi.getPrices().then((res) => setPricesDict(res.dict));
  }, []);

  const covertedValue = useAssetConversion({
    value,
    price: selectedAssetPrice,
    assetType: selectedAssetType
  });
  const interest = useCompoundInterest({
    value: selectedAssetType === 'crypto' ? Number(value) : covertedValue,
    rate: selectedOperationType === 'borrow' ? selectedAssetData?.borrowApy : selectedAssetData?.supplyApy,
    months: selectedDuration
  });
  const covertedInterest = useAssetConversion({
    value: interest,
    price: selectedAssetPrice,
    assetType: 'crypto'
  });

  return (
    <div className="container max-w-xl">
      <div className="flex flex-col h-dvh w-full items-center gap-10 py-10">
        <Logo />
        <div className="rounded-lg px-5 pb-8 pt-5 bg-master w-full noise">
          <Tabs
            value={selectedOperationType}
            onValueChange={(val) => setSelectedOperationType(val as OperationType)}
            defaultValue="supply">
            <TabsList className="w-full mb-8">
              {operationsTypes.map((type, idx) => (
                <TabsTrigger className="flex-1 capitalize" value={type} key={`tabs-trigger-${idx}`}>
                  {type}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          <div className="flex gap-2 flex-wrap">
            {assets.map((item, idx) => {
              const Icon = currencyIcon[item.name];
              const data = assetsDict?.get(item.assetId);
              const rate = selectedOperationType === 'borrow' ? data?.borrowApy : data?.supplyApy;
              const percent = roundNum((rate ?? 0) * 100);

              return (
                <div className="flex flex-1 flex-col" key={`token-${item.name}-${idx}`}>
                  <Button
                    className="flex-1 gap-2"
                    size="lg"
                    variant={selectedAsset.assetId !== item.assetId ? 'outline' : 'default'}
                    onClick={() => {
                      setSelectedAsset(item);
                      setValue('');
                    }}>
                    <Icon height={24} width={24} />
                    {item.name}
                  </Button>
                  <div className="flex text-xs gap-1 mx-auto text-muted-foreground mt-2">
                    <span className="capitalize">{selectedOperationType}</span> APY
                    <span className="font-bold text-foreground">{percent ? `${percent}%` : '—'}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <Input
              type="number"
              value={value}
              wrapClassName="mt-6"
              placeholder={`0.00 ${selectedAssetType === 'crypto' ? selectedAsset.name : 'USD'}`}
              onChange={setValue}
              suffix={
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedAssetType(selectedAssetType === 'crypto' ? 'fiat' : 'crypto');
                    if (covertedValue) setValue(String(covertedValue));
                  }}>
                  <ArrowDownUp size={15} className="mr-1" />
                  {selectedAssetType === 'crypto' ? 'USD' : selectedAsset.name}
                </Button>
              }
              caption={
                <span className="text-sm text-gray-500">
                  ~{selectedAssetType === 'crypto' ? `$${covertedValue}` : `${covertedValue} ${selectedAsset.name}`}
                </span>
              }
            />
          </div>
          <div className="flex gap-4 mt-6">
            <div className="text-sm text-muted-foreground text-nowrap">Loan terms:</div>
            <div className="flex gap-4 flex-wrap">
              {durations.map((item, idx) => (
                <Button
                  key={`duration-btn-${idx}`}
                  variant="text"
                  size="fit"
                  className={clsx('font-bold', { 'text-primary': selectedDuration === item })}
                  onClick={() => setSelectedDuration(item)}>
                  {item} MONTH
                </Button>
              ))}
            </div>
          </div>
        </div>
        <section className="bg-hero text-hero-foreground noise rounded-md px-5 py-6 w-full">
          <div>
            <div className="text-sm">Potential Return</div>
            <div className="flex justify-between mt-1">
              <div>
                <div>
                  <span className="text-2xl">{interest}</span> {selectedAsset.name}
                </div>
                <div className="text-sm text-gray-500">~${covertedInterest}</div>
              </div>
              <Button variant="secondary" className="min-w-48">
                {selectedOperationType === 'supply' ? <CirclePlusIcon /> : <Upload size={20} />}
                <span className="capitalize ml-3 mr-1">{selectedOperationType}</span> Now
              </Button>
            </div>
          </div>
        </section>
        <footer>
          <ThemeSwitcher />
        </footer>
      </div>
    </div>
  );
}
