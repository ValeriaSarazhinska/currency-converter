import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material/toolbar'
import { HttpClientModule } from '@angular/common/http'
import { CurrencyModule } from './modules/currency/currency.module'
import { registerLocaleData } from '@angular/common'
import localeUk from '@angular/common/locales/uk'

registerLocaleData(localeUk, 'uk-UA')

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    CurrencyModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
