// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemeRoutingModule } from './theme-routing.module';
import { HomeModule } from '../home/home.module';
import { LoginModule } from '../auth/login/login.module';
import { SignUpModule } from '../auth/signup/signup.module';
import { GenerModule } from '../gener/gener.module';
import { ProductModule } from '../product/product.module';
import { ErrorsModule } from '../errors/errors.module';
import { WidgetsModule } from '../widgets/widget.module';
import { CommonModule } from '@angular/common';
import { ServiceModule } from '../service/service.module';
import { ProfileModule } from '../profiles/profile.module';
import { ClientModule } from './client/client.module';
import { AdminModule } from './admin/admin.module';
@NgModule({
    declarations: [
        // ThemeComponent,
        // BodyComponent,
        // HeaderComponent,
        // FooterComponent,
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
        ServiceModule,
        ProfileModule,
        ClientModule,
        AdminModule,
        ThemeRoutingModule,
    ],
    providers: []
})
export class ThemeModule { }
