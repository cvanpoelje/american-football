import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputComponent } from "./UI/input/input.component";
import { CardComponent } from "./UI/card/card.component";
import { ButtonComponent } from "./UI/button/button.component";
import { FormComponent } from "./UI/form/form.component";

@NgModule({
  declarations: [
    InputComponent,
    CardComponent,
    ButtonComponent,
    FormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
