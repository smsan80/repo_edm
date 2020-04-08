import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientBodyComponent } from './client/body/body.component';
import { AdminBodyComponent } from './admin/body/body.component';
import { ThemeModule } from './theme.module';

const routes: Routes = [

];

@NgModule({
    imports: [ThemeModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }