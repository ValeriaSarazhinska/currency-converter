import { Directive, ElementRef, HostListener } from '@angular/core'

@Directive({
  selector: '[appValidate]',
})
export class ValidateDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange() {
    const input = this.el.nativeElement as HTMLInputElement
    let value = input.value

    if (/^0[^.,]/.test(value)) {
      value = value.substring(value.indexOf('0') + 1)
    }

    input.value = value.replace('-', '')
  }
}
