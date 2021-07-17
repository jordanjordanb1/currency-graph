import { selector } from 'recoil';
import { getHistoricalRates } from '../utils';
import {
  baseCurrencyFilterState,
  endDateFilterState,
  startDateFilterState,
} from './filter';

export const historicalDataQuery = selector({
  key: 'historicalDataSelector',
  get: async ({ get }) => {
    const baseCurrency = get(baseCurrencyFilterState);
    const start = get(startDateFilterState);
    const end = get(endDateFilterState);

    if (!start || !end) {
      return [];
    }

    const rates = await getHistoricalRates(baseCurrency, start, end);

    return rates;
  },
});
