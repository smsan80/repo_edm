// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerSliderComponent } from './bannerSlider/bannerSlider.component';
import { WidgetsService } from './_service/widget.service';
@NgModule({

    imports: [
        CommonModule
    ],
    declarations: [
        BannerSliderComponent
    ],
    exports: [
        BannerSliderComponent
    ],
    providers: [WidgetsService]
})
export class WidgetsModule { }
