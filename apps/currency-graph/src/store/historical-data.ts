import { selector } from 'recoil';
import { getHistoricalRates } from '../utils';
import {
  baseCurrencyFilterState,
  endDateFilterState,
  selectedCurrenciesFilterState,
  startDateFilterState,
} from './filter';

export const historicalDataQuery = selector({
  key: 'historicalDataSelector',
  get: async ({ get }) => {
    const baseCurrency = get(baseCurrencyFilterState);
    const selectedCurrencies = get(selectedCurrenciesFilterState);
    const start = get(startDateFilterState);
    const end = get(endDateFilterState);

    if (!start || !end) {
      return [];
    }

    const rates = await getHistoricalRates(baseCurrency, selectedCurrencies, start, end);

    return rates;
  },
});
