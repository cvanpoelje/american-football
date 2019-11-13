import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { LoginComponent } from './containers/login/login.component';
import { UIModule } from 'src/shared/UI/ui.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainlayoutComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    UIModule,
    FormsModule,
  ],
  exports: [MainlayoutComponent]
})
export class CoreModule { }
