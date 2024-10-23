import { OpenedContract, TonClient } from '@ton/ton';
import { Evaa, PoolConfig, MasterData, PriceData } from '@evaafi/sdk';
import { Maybe } from '@ton/ton/dist/utils/maybe';

interface ApiConfig {
  endpoint: string;
  apiKey: string;
  poolConfig: PoolConfig;
}

class EvaaApi {
  private client: TonClient;
  private evaa: OpenedContract<Evaa>;

  constructor(config: ApiConfig) {
    this.client = new TonClient({
      endpoint: config.endpoint,
      apiKey: config.apiKey
    });
    this.evaa = this.client.open(new Evaa({ poolConfig: config.poolConfig }));
  }

  async getSync(): Promise<Maybe<MasterData>> {
    try {
      await this.evaa.getSync();
      return this.evaa.data;
    } catch (error) {
      throw error;
    }
  }

  async getPrices(): Promise<PriceData> {
    try {
      return await this.evaa.getPrices();
    } catch (error) {
      throw error;
    }
  }
}

export { EvaaApi };
