import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputComponent } from "./input/input.component";
import { CardComponent } from "./card/card.component";
import { ButtonComponent } from "./button/button.component";
import { FormComponent } from "./form/form.component";
import { FormsModule } from '@angular/forms';

export const UI__DECLARATIONS = [
  InputComponent,
  CardComponent,
  ButtonComponent,
  FormComponent,
];


@NgModule({
  declarations: [
    UI__DECLARATIONS
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    UI__DECLARATIONS
  ]
})
export class UIModule { }
