import { selector } from 'recoil';
import { getHistoricalRates } from '../utils';
import {
  currencyFilterState,
  endDateFilterState,
  startDateFilterState,
} from './filter';

export const historicalDataQuery = selector({
  key: 'historicalDataSelector',
  get: async ({ get }) => {
    const currency = get(currencyFilterState);
    const start = get(startDateFilterState);
    const end = get(endDateFilterState);

    if (!start || !end) {
      return [];
    }

    const rates = await getHistoricalRates(currency, start, end);

    return rates;
  },
});
