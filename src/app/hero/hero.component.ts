import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  // heroImage: string = "./assets/hero.jpg";
  heroHeading: string =  "We are your ultimate Tourist Agency";
  heroText: string  =  "With hundreds of winter holiday destinations offered, we are your <br> natural choice for planning it all out!";
  heroBtnText: string =  "Learn more";
  heroBtnUrl: string =  "/about";
  // display: string = "We are your ultimate";
  // display1: string = "Winter experience Provider";
  // display2: string = "With hundreds of winter holiday destinations offered, we are your <br> natural choice for planning it all out!";
  // btnText: string = "Learn more";


  constructor() { }

  ngOnInit(): void {
  }

}

