import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AccountsModule } from 'src/accounts/accounts.module'
import {CalculatorModule} from '../calculators/calculators.module'

import { AppComponent } from './app-component/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, CalculatorModule, AccountsModule, BrowserAnimationsModule]
})

export class AppModule{}