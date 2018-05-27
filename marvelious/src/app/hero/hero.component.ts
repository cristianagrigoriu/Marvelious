import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mrv-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() name:string = 'black_panther';

  get path(){
    return `assets/heroes/${this.name}.png`;
  }

  constructor() { }

  ngOnInit() {
  }

}
