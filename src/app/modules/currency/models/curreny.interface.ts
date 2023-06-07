export type Currencies = 'UAH' | 'USD' | 'EUR'

export interface ConversionRates {
  [currency: string]: number
}
