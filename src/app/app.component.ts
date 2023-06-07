import { Component, OnInit } from '@angular/core'
import { CurrencyService } from './modules/currency/services/currency.service'
import { formatCurrency } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  usdToUah?: string
  eurToUah?: string

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.currencyService.getExchangeRates('UAH').subscribe(({ USD, EUR }) => {
      this.usdToUah = formatCurrency(1 / USD, 'uk-UA', 'UAH')
      this.eurToUah = formatCurrency(1 / EUR, 'uk-UA', 'UAH')
    })
  }
}
