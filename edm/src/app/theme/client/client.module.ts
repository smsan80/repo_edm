// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
    declarations: [
        BodyComponent,
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
    ],
    providers: []
})
export class ClientModule { }
