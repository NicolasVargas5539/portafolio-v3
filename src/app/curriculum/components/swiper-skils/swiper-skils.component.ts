import { AfterViewInit, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skills } from '../../interfaces/interfaces';

// Importaciones de Swiper
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([Pagination]);

@Component({
  selector: 'app-swiper-skils',
  imports: [CommonModule],
  templateUrl: './swiper-skils.component.html',
  styleUrl: './swiper-skils.component.css'
})
export class SwiperSkilsComponent implements AfterViewInit {
  @Input() public skils: Skills[] = [];

  ngAfterViewInit() {
    const swiper = new Swiper('.mySwiper1', {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination1',
        dynamicBullets: true,
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        400: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      },
    });
  }
}
