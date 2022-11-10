import { Component, Output, EventEmitter } from "@angular/core";


@Component({

    templateUrl: './medCalculatorInput.component.html',
    selector: 'med-calculator-input',
})
export class MedCalculatorInputComponent{
    creatinine: number = 0;
    total_bilirubin: number = 0;
    inr: number = 0;
    @Output() onInputChange = new EventEmitter<any>();
    @Output() onResetEvent = new EventEmitter<any>();


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

    calculateMedScore(){
       this.onInputChange.emit({creatinine:this.creatinine, total_bilirubin:this.total_bilirubin, inr: this.inr})
    }

    reset(){
        this.creatinine = 0; 
        this.total_bilirubin = 0;
        this.inr = 0;
        this.onResetEvent.emit({medScore: 0});
    }
}