import { Component } from "@angular/core";
import { ConsoleLoggerService } from "src/services/consoleLogger.service";

@Component({

    templateUrl: './medCalculator.component.html',
    selector: 'med-calculator'
})
export class MedCalculatorComponent{

    constructor(private consoleLogger: ConsoleLoggerService){}

    creatinine: number = 0;
    total_bilirubin: number = 0;
    inr: number = 0;
    medScore: number = 0;

    setCreatinine(value: string){
        this.creatinine = parseInt(value);
        console.log('setCreatinine Invoked', this.creatinine);
    }

    setBilirubin(value: string){
        this.total_bilirubin = parseInt(value);
        console.log('setCreatinine Invoked', this.creatinine);
    }

    setINR(value: string){
        this.inr = parseInt(value);
        console.log('setCreatinine Invoked', this.creatinine);
    }

    // setSodium(value: string){
    //     this.INR = parseInt(value);
    //     console.log('setCreatinine Invoked', this.creatinine);
    // }



    calculateMedScore(){
        this.medScore = 9.57 * Math.log (this.creatinine) + 3.78 * Math.log (this.total_bilirubin) + 11.2 * Math.log (this.inr) + 6.43;
        console.log(this.medScore);
    }

    reset(){
        this.creatinine = 0; 
        this.total_bilirubin = 0;
        this.inr = 0;
        this.medScore = 0;
    }

}