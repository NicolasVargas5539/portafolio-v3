import { Component } from '@angular/core';
import { Skills } from '../../interfaces/interfaces';
import { SwiperSkilsComponent } from "../../components/swiper-skils/swiper-skils.component";

@Component({
  selector: 'app-home',
  imports: [SwiperSkilsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public skills : Skills [] = [
    { img: '',
      label: 'HTML'},
    { img: '',
      label: 'CSS'},
    { img: '',
      label: 'JS'},
    { img: '',
      label: 'TS'},
    { img: '',
      label: 'Angular'},
    { img: '',
      label: 'Bootstrap'},
    { img: '',
      label: 'MySQL'},
    { img: '',
      label: 'NodeJs'},
    { img: '',
      label: 'Firebase'},
  ];
}
