import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
title: string = "Why We're the Best";
first: string = "Accommondation";
firstP: string = "We offer the first selection of top match hotels anywhere!";
second: string = "Transportation";
secondP: string = "Whether it's about air tickets or shuttle bus, we will set it up!";
third: string = "Seasoned Agents";
thirdP: string = "Combined, the experience our agents have is centuries!";
four: string = "Easy Trip Planning";
fourP: string = "Our travel agents are always ready to plan your project trip!";
natpis: string = "Best Winter Trips";
pics1: string = "./assets/img/img01.jpeg";
pics2: string = "./assets/img/img02.jpeg";
pics3: string = "./assets/img/img03.jpeg";
pics4: string = "./assets/img/img04.jpeg";
pics5: string = "./assets/img/img05.jpeg";
pics6: string = "./assets/img/img06.jpeg";
dest1: string = "Jasna, Slovakia";
dest2: string = "Abisko,Sweden";
dest3: string = "Lapland,Finland";
dest4: string = "Neuschneher, Austria";
dest5: string = "Abisko,Sweden";
dest6: string = "Jasna, Slovakia";
price1: string = "120€/pers";
price2: string = "130€/pers";
price3: string = "140€/pers";
price4: string = "150€/pers";
price5: string = "120€/pers";
price6: string = "125€/pers";


  constructor() { }

  ngOnInit(): void {
  }

}