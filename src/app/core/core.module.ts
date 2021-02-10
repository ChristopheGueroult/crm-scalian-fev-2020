import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../login/login.module';
import { UiModule } from '../ui/ui.module';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, NavComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoginModule,
    UiModule,
    HeaderComponent,
    NavComponent,
    FooterComponent
  ]
})
export class CoreModule { }
