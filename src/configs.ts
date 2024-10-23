import { TESTNET_POOL_CONFIG } from '@evaafi/sdk';

const apiConfig = {
  endpoint: import.meta.env.VITE_TON_ENDPOINT,
  apiKey: import.meta.env.VITE_TON_API_KEY,
  poolConfig: TESTNET_POOL_CONFIG
};
export { apiConfig };
