// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { WidgetsModule } from '../widgets/widget.module';
@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        WidgetsModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomeComponent
            }
        ]),
    ],
    providers: []
})
export class HomeModule { }
