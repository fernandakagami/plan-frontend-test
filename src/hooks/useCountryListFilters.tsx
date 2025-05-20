'use client'

import { inferParserType, parseAsString, useQueryStates } from 'nuqs'

export const countryListFiltersDto = {
  name: parseAsString,
  language: parseAsString,
  region: parseAsString,
}

export type ICountryListFilters = Partial<inferParserType<typeof countryListFiltersDto>>;

export function useCountyListFilters() {
  return useQueryStates(countryListFiltersDto, { clearOnDefault: true })
}
