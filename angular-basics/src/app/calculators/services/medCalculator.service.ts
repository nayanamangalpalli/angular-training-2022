
export class MedCalculatorService{

    calculateMedScore(creatinine: number, total_bilirubin: number, inr: number ){
        return (9.57 * Math.log (creatinine) + 3.78 * Math.log (total_bilirubin) + 11.2 * Math.log (inr) + 6.43);
 
    }
}