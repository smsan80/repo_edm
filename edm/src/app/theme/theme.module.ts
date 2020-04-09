// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './client/body/body.component';
import { HeaderComponent } from './client/header/header.component';
import { FooterComponent } from './client/footer/footer.component';
@NgModule({
    declarations: [
        BodyComponent,
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        RouterModule
    ],
    providers: []
})
export class ThemeModule { }
