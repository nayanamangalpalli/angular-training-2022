import { Component, Input } from "@angular/core";

@Component({

    templateUrl: './medCalculatorOutput.component.html',
    selector: 'med-calculator-output',
})
export class MedCalculatorOutputComponent{

    @Input()
    meldScore: number = 0;
}
