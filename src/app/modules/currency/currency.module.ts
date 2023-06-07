import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CurrencyComponent } from './components/currency/currency.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { ValidateDirective } from './validate.directive'

@NgModule({
  declarations: [CurrencyComponent, ValidateDirective],
  exports: [CurrencyComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class CurrencyModule {}
