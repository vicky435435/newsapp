import { Component } from '@angular/core';
import {SwiperComponent} from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, {EffectCards}from "swiper";

// install swiper modules
SwiperCore.use([EffectCards]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  show = true;

share() {
console.log('hellow')
}

  constructor() {}
  hide(){
     this.show = !this.show;
  }
}
