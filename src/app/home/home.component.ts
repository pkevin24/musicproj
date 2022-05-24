import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list = ['Welcome to the MUSIC WORLD', 'which consists of MILLIONS of songs and PODCASTS from different creator']

  constructor() { }

  ngOnInit(): void {
  }

}
