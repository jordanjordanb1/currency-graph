import { atom } from 'recoil';

export const countryCodeFilterState = atom<string>({
  key: 'countryCodeFilterState',
  default: '',
});

export const startDateFilterState = atom<Date | null>({
  key: 'startDateFilterState',
  default: null,
});

export const endDateFilterState = atom<Date | null>({
  key: 'endDateFilterState',
  default: null,
});
