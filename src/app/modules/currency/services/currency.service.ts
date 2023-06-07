import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { ConversionRates, Currencies } from '../models/curreny.interface'

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl =
    'https://v6.exchangerate-api.com/v6/3737e3a526e4e99f4d2bf4ce/latest/'

  constructor(private http: HttpClient) {}

  getExchangeRates(currency: Currencies): Observable<ConversionRates> {
    return this.http.get<any>(`${this.apiUrl}${currency}`).pipe(
      map(data => {
        return data.conversion_rates
      })
    )
  }
}
