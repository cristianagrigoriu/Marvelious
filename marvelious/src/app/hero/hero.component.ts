import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mrv-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() name:string;
  @Input() image:string;

  get path(){
    return `assets/heroes/${this.image}.png`;
  }

  constructor() { }

  ngOnInit() {
  }

}
