import Axios from 'axios';
import { selector } from 'recoil';

type ExchangeRateSymbol = {
  description: string;
  code: string;
};

type ExchangeRateSymbols = {
  [key: string]: ExchangeRateSymbol;
};

export const countryCodeQuery = selector({
  key: 'countryCodeState',
  get: async () => {
    const hasSessionStorage = 'sessionStorage' in window;

    const cachedData =
      hasSessionStorage && sessionStorage.getItem('countryCodes');

    if (cachedData) {
      const parsedData = JSON.parse(cachedData) as ExchangeRateSymbol[];

      return parsedData;
    }

    const { data } = await Axios.get<{ symbols: ExchangeRateSymbols }>(
      'https://api.exchangerate.host/symbols'
    );

    const symbols = Object.values(data.symbols);

    if (hasSessionStorage) {
      sessionStorage.setItem('countryCodes', JSON.stringify(symbols));
    }

    return symbols;
  },
});
