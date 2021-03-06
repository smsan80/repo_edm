// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WidgetsModule } from '../widgets/widget.module';
import { UserProfileComponent } from './user/user.component';
import { ProducerProfileComponent } from './producer/producer.component';
@NgModule({
    declarations: [
        UserProfileComponent,
        ProducerProfileComponent
    ],
    imports: [
        CommonModule,
        WidgetsModule,
        RouterModule.forChild([
            {
                path: 'user',
                component: UserProfileComponent
            },
            {
                path: 'producer',
                component: ProducerProfileComponent
            }
        ]),
    ],
    providers: []
})
export class ProfileModule { }
