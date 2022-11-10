import { Component } from "@angular/core";
import { ConsoleLoggerService } from "../../services/consoleLogger.service";
import { MedCalculatorService } from "../services/medCalculator.service";

@Component({

    templateUrl: './medCalculator.component.html',
    selector: 'med-calculator',
    providers: [{provide: MedCalculatorService, useClass: MedCalculatorService}]
})
export class MedCalculatorComponent{

    medScore: number = 0;
    constructor(private consoleLogger: ConsoleLoggerService,
                private medCalculatorService: MedCalculatorService){}

    

    calculateMedScore(creatinine: any, total_bilirubin: any, inr: any){
        this.medScore = this.medCalculatorService.calculateMedScore(creatinine, total_bilirubin, inr);    
    }

    setMedCalculatorInput(data){
        this.calculateMedScore(data.creatinine, data.total_bilirubin, data.inr);
    }

    resetValues(data){
        this.medScore = data.medScore;
    }

}