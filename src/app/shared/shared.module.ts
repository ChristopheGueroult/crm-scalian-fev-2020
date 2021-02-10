import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { IconsModule } from '../icons/icons.module';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { BtnComponent } from './components/btn/btn.component';



@NgModule({
  declarations: [TableauLightComponent, BtnComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TemplatesModule,
    IconsModule,
    TableauLightComponent,
    BtnComponent
  ]
})
export class SharedModule { }
