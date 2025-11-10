import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginOlivacabanillasComponent } from './component/login-olivacabanillas/login-olivacabanillas.component';
import { Reporte01OlivacabanillasComponent } from './component/reporte01-olivacabanillas/reporte01-olivacabanillas.component';
import { Reporte02OlivacabanillasComponent } from './component/reporte02-olivacabanillas/reporte02-olivacabanillas.component';

const routes: Routes = [
  {
    path: '', component: LoginOlivacabanillasComponent
  },
  {
    path: 'home', component: InicioComponent
  },
  {
    path: 'reporte1', component: Reporte01OlivacabanillasComponent
  },
  {
    path: 'reporte2', component: Reporte02OlivacabanillasComponent
  }   
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
