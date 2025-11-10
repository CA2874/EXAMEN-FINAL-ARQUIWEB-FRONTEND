import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { HeaderComponent } from './component/header/header.component';
import { MatMenuModule } from '@angular/material/menu';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TokenInterceptor } from './service/token.interceptor';

import { LoginOlivacabanillasComponent } from './component/login-olivacabanillas/login-olivacabanillas.component';
import { Reporte01OlivacabanillasComponent } from './component/reporte01-olivacabanillas/reporte01-olivacabanillas.component';
import { Reporte02OlivacabanillasComponent } from './component/reporte02-olivacabanillas/reporte02-olivacabanillas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    LoginOlivacabanillasComponent,
    Reporte01OlivacabanillasComponent,
    Reporte02OlivacabanillasComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule, // Asegúrate de importar MatMenuModule
    NgxChartsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }, provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
