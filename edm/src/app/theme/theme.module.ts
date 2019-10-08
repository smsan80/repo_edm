import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';

@NgModule({
    declarations: [
       
    ],
    imports: [
        // RouterModule,
        AdminModule,
        ClientModule
    ],
    providers: []
})
export class ThemeModule { }