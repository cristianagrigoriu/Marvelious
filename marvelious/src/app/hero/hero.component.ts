import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../model';

@Component({
  selector: 'mrv-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() hero:Hero;

  constructor() { }

  ngOnInit() {
  }

}
