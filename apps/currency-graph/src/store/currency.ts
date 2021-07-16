import Axios from 'axios';
import { selector } from 'recoil';

type ExchangeRateSymbol = {
  description: string;
  code: string;
};

type ExchangeRateSymbols = {
  [key: string]: ExchangeRateSymbol;
};

export const currencyQuery = selector({
  key: 'currencyState',
  get: async () => {
    const hasSessionStorage = 'sessionStorage' in window;

    const cachedData = hasSessionStorage && sessionStorage.getItem('currencys');

    if (cachedData) {
      const parsedData = JSON.parse(cachedData) as ExchangeRateSymbol[];

      return parsedData;
    }

    const { data } = await Axios.get<{ symbols: ExchangeRateSymbols }>(
      'https://api.exchangerate.host/symbols'
    );

    const symbols = Object.values(data.symbols);

    if (hasSessionStorage) {
      sessionStorage.setItem('currencys', JSON.stringify(symbols));
    }

    return symbols;
  },
});
