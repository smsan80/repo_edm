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
import { GenerModule } from '../gener/gener.module';
import { ProductModule } from '../product/product.module';
import { ErrorsModule } from '../errors/errors.module';
import { WidgetsModule } from '../widgets/widget.module';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        ThemeComponent,
        BodyComponent,
        HeaderComponent,
        FooterComponent,
    ],
    imports: [        
        RouterModule,
        CommonModule,
        HomeModule,
        WidgetsModule,
        LoginModule,
        SignUpModule,
        GenerModule,
        ProductModule,
        ErrorsModule,
        ThemeRoutingModule,
    ],
    providers: []
})
export class ThemeModule { }
