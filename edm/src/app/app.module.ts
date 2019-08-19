import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminBodyComponent } from './theme/admin/body/body.component';
import { HeaderComponent } from './theme/admin/header/header.component';
import { FooterComponent } from './theme/admin/footer/footer.component';
import { IndexComponent } from './pages/index/index.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminBodyComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
