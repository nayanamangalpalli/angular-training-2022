import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AccountsModule } from './accounts/accounts.module'
import {CalculatorModule} from './calculators/calculators.module'

import { AppComponent } from './app-component/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component'
import { AppRoutingModule } from './appRouting.module';
import { MaterialExampleModule } from './material.module';
@NgModule({
    declarations: [AppComponent, HomeComponent],
    bootstrap: [AppComponent],
    imports: [  
        BrowserModule, 
        CalculatorModule, 
        AccountsModule, 
        BrowserAnimationsModule, 
        AppRoutingModule, 
        MaterialExampleModule
    ]
})

export class AppModule{}