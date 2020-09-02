import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'white',
  template: `<div class="white">`,
  styles: [`
  .white{
    background: #ffffff; 
    wigth: 30px;
    height: 80px;
  }`]
})
export class WhiteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
