// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddModifyGenersComponent } from './addmodifygener/addmodifygener.component';
import { GenerListComponent } from './generlist/generlist.component';
@NgModule({
    declarations: [
        GenerListComponent,
        AddModifyGenersComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: GenerListComponent
            },
            {
                path: 'addmodify',
                component: AddModifyGenersComponent
            }
        ]),
    ],
    providers: []
})
export class GenersModule { }
