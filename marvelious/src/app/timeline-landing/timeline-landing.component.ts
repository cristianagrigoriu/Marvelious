import { Component, OnInit } from '@angular/core';
import { Hero } from '../model';

@Component({
  selector: 'mrv-timeline-landing',
  templateUrl: './timeline-landing.component.html',
  styleUrls: ['./timeline-landing.component.scss']
})
export class TimelineLandingComponent implements OnInit {

  heroes: Hero[] = [{
    name: 'Black Panther',
    image: 'black_panther',
    description: `
    Real Name: T'Challa

    Height: 6'

    Weight: 200 lbs.

    Powers: T'Challa's senses and physical attributes have been enhanced to superhuman levels by the heart-shaped herb.

    Abilities: T'Challa is a brilliant tactician, strategist, scientist, tracker and a master of all forms of unarmed combat whose unique hybrid fighting style incorporates acrobatics and aspects of animal mimicry.

    Group Affiliations:  Formerly Fantastic Four, Secret Avengers, Avengers, Pendragons, Queen's Vengeance, former Fantastic Force financier

    First Appearance: Fantastic Four Vol. 1 #52 (1966)
    `
  }, {
    name: 'Doctor Strange',
    image: 'doctor_strange'
  }, {
    name: 'Captain America',
    image: 'captain_america'
  }, {
    name: 'Ironman',
    image: 'ironman'
  }, {
    name: 'Black Widow',
    image: 'black_widow'
  }];

  constructor() { }

  ngOnInit() {
  }

}
