import { Component, OnInit } from '@angular/core'
import { CurrencyService } from '../../services/currency.service'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ConversionRates } from '../../models/curreny.interface'
import { supportedCountries } from '../../../../../utils/supported-countries'

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
})
export class CurrencyComponent implements OnInit {
  currencyForm: FormGroup
  rates?: ConversionRates
  supportedCountries = supportedCountries

  constructor(
    private formBuilder: FormBuilder,
    private currencyService: CurrencyService
  ) {
    this.currencyForm = this.formBuilder.group({
      amount: 0,
      result: 0,
      fromCurrency: 'UAH',
      toCurrency: 'USD',
    })
  }

  ngOnInit() {
    this.currencyForm.get('fromCurrency')?.valueChanges.subscribe(() => {
      this.updateRates()
    })

    this.currencyForm.get('toCurrency')?.valueChanges.subscribe(() => {
      this.calculateResult()
    })

    this.currencyForm.get('amount')?.valueChanges.subscribe(() => {
      this.calculateResult()
    })

    this.currencyForm.get('result')?.valueChanges.subscribe(() => {
      this.calculateAmount()
    })

    this.updateRates()
  }

  updateRates() {
    const currency = this.currencyForm.get('fromCurrency')?.value

    this.currencyService.getExchangeRates(currency).subscribe(rates => {
      this.rates = rates
      this.calculateResult()
    })
  }

  calculateResult() {
    const amount = this.currencyForm.get('amount')?.value
    const toCurrency = this.currencyForm.get('toCurrency')?.value

    if (!amount) {
      this.currencyForm.patchValue({ result: 0 }, { emitEvent: false })
    } else if (amount && toCurrency && this.rates) {
      const rate = this.rates[toCurrency]
      const result = (amount * rate).toFixed(2)
      this.currencyForm.patchValue({ result }, { emitEvent: false })
    }
  }

  calculateAmount() {
    const result = this.currencyForm.get('result')?.value
    const toCurrency = this.currencyForm.get('toCurrency')?.value

    if (!result) {
      this.currencyForm.patchValue({ amount: 0 }, { emitEvent: false })
    } else if (result && toCurrency && this.rates) {
      const rate = this.rates[toCurrency]
      const amount = (result / rate).toFixed(2)
      this.currencyForm.patchValue({ amount }, { emitEvent: false })
    }
  }
}
