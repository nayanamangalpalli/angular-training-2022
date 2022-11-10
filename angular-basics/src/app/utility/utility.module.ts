import { NgModule } from "@angular/core";
import { DefaultValuePipe } from "./pipes/DefaultValuePipe";

@NgModule({
    declarations: [DefaultValuePipe],
    exports: [DefaultValuePipe]
})
export class UtilityModule{}