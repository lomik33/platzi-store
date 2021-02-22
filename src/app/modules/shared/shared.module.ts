import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';


@NgModule({
  declarations: [
    ExponentialPipe,
    FooterComponent,
    HeaderComponent],

   //Para que los usen en otros componentes
    exports:[
      ExponentialPipe,
      FooterComponent,
      HeaderComponent
    ],
  imports: [
    CommonModule,
    RouterModule //Para poner links
  ]
})
export class SharedModule { }
