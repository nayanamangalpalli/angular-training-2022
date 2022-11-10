import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ConsoleLoggerService } from "../services/consoleLogger.service";
import { UtilityModule } from "../utility/utility.module";
import { MedCalculatorComponent } from "./medCalculator/medCalculator.component";
import { MedCalculatorInputComponent } from "./medCalculatorInput/medCalculatorInput.component";
import { MedCalculatorOutputComponent } from "./medCalculatorOutput/medCalculatorOutput.component";

@NgModule({

    declarations: [MedCalculatorComponent, MedCalculatorInputComponent, MedCalculatorOutputComponent],
    exports: [MedCalculatorComponent],
    imports: [UtilityModule, CommonModule],
    providers: [{provide: ConsoleLoggerService, useClass: ConsoleLoggerService}]
})

export class CalculatorModule{}