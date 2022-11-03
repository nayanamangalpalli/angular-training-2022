import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app-component/app.component'
import { CalculatorComponent } from './calculator/calculator.component'
import { MedCalculatorComponent } from './med-calculator/medCalculator.component'
@NgModule({
    declarations: [AppComponent,MedCalculatorComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule]
})

export class AppModule{}