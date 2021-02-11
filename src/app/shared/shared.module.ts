import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { IconsModule } from '../icons/icons.module';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { BtnComponent } from './components/btn/btn.component';
import { TotalPipe } from './pipes/total.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TableauLightComponent, BtnComponent, TotalPipe],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TemplatesModule,
    IconsModule,
    TableauLightComponent,
    BtnComponent,
    TotalPipe
  ]
})
export class SharedModule { }
