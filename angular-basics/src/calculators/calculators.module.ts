import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ConsoleLoggerService } from "src/services/consoleLogger.service";
import { UtilityModule } from "src/utility/utility.module";
import { MedCalculatorComponent } from "./medCalculator/medCalculator.component";

@NgModule({

    declarations: [MedCalculatorComponent],
    exports: [MedCalculatorComponent],
    imports: [UtilityModule, CommonModule],
    providers: [{provide: ConsoleLoggerService, useClass: ConsoleLoggerService}]
})

export class CalculatorModule{}