import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title: string = "Linde's Travel Agency";
  pageH: string= "Home";
  pageA: string= "About us";
  pageC: string= "Contact us";


  constructor() { }

  ngOnInit(): void {
  }

}
