// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './client/body/body.component';
import { HeaderComponent } from './client/header/header.component';
import { FooterComponent } from './client/footer/footer.component';
import { ThemeComponent } from './theme.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { HomeModule } from '../home/home.module';
import { LoginModule } from '../auth/login/login.module';
import { SignUpModule } from '../auth/signup/signup.module';
@NgModule({
    declarations: [
        ThemeComponent,
        BodyComponent,
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        RouterModule,
        HomeModule,
        LoginModule,
        SignUpModule,
        ThemeRoutingModule,
    ],
    providers: []
})
export class ThemeModule { }
