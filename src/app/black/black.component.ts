import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'black',
  template: `
  <div class="black">`,
  styles: [`
  .black{
    background: #000000;
    wigth: 30px;
    height: 80px;
  }`]
})
export class BlackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
