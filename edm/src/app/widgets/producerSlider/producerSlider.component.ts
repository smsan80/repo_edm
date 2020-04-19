import { Component, OnInit, ViewChild } from '@angular/core';

import {
    SwiperComponent, SwiperDirective, SwiperConfigInterface,
    SwiperScrollbarInterface, SwiperPaginationInterface
} from 'ngx-swiper-wrapper';

@Component({
    selector: 'app-producerSlider',
    templateUrl: './producerSlider.component.html',
    styleUrls: ['./producerSlider.component.scss']
})
export class ProducerSliderComponent implements OnInit {
    @ViewChild(SwiperComponent) componentRef: SwiperComponent;
    constructor() { }
    public slides = [
        'Fourth slide',
        'Fifth slide',
        'Sixth slide',
        'Fourth slide',
        'Fifth slide',
        'Sixth slide',
        'Fourth slide',
        'Fifth slide',
        'Sixth slide',
        'Fourth slide',
        'Fifth slide',
        'Sixth slide',
        'Fourth slide',
        'Fifth slide',
        'Sixth slide'
    ]; public config: SwiperConfigInterface = {
        direction: 'horizontal',
        slidesPerView: 3,
        keyboard: true,
        mousewheel: true,
        scrollbar: false,
        navigation: true,
        pagination: false,
        autoplay: true,
    };

    private scrollbar: SwiperScrollbarInterface = {
        el: '.swiper-scrollbar',
        hide: false,
        draggable: true
    };

    private pagination: SwiperPaginationInterface = {
        el: '.swiper-pagination',
        clickable: true,
        hideOnClick: false
    };
    ngOnInit(): void {
    }

}
