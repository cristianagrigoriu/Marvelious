import { Component, OnInit, HostListener } from '@angular/core';
import { Hero } from '../model';
import { DataService } from '../data.service';

enum FocusType{
  Events= <any>'events',
  Heroes= <any>'heroes',
  Comics= <any>'comics'
}

@Component({
  selector: 'mrv-timeline-landing',
  templateUrl: './timeline-landing.component.html',
  styleUrls: ['./timeline-landing.component.scss']
})
export class TimelineLandingComponent implements OnInit {

  current: Hero[];
  events: Hero[];
  heroes: Hero[];
  comics: Hero[];
  active: string;
  searchTerm: string;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.focusEvents();
  }

  focusEvents(){
    this.active = 'events';
    this.focus(FocusType.Events);
  }

  focusComics(){
    this.active = 'comics';
    this.focus(FocusType.Comics);
  }

  focusHeroes(){
    this.active = 'heroes';
    this.focus(FocusType.Heroes);
  }

  focus(entry: any){
    this.current = undefined;
    switch(entry){
      case FocusType.Comics:
        if (this.comics && this.searchTerm.length < 1){
          this.current = this.comics;
        } else{
          this.dataService.getComics(0, this.searchTerm).subscribe((res:Hero[])=>{
            this.comics = res;
            this.current = res;
          });
        }
        break;
      case FocusType.Events:
        if (this.events && this.searchTerm.length < 1){
          this.current = this.events;
        } else{
          this.dataService.getEvents(0, this.searchTerm).subscribe((res:Hero[])=>{
            this.events = res;
            this.current = res;
          });
        }
        break;
      case FocusType.Heroes:
        if (this.heroes && this.searchTerm.length < 1){
          this.current = this.heroes;
        } else{
          this.dataService.getHeroes(0, this.searchTerm).subscribe((res:Hero[])=>{
            this.heroes = res;
            this.current = res;
          });
        }
        break;
    }
  }

  loadLazy: boolean = false;

  nextLazy(){
    switch(this.active){
      case 'events':
        this.lazyLoad(FocusType.Events);
        break;
      case 'heroes':
        this.lazyLoad(FocusType.Heroes);
        break;
      case 'comics':
        this.lazyLoad(FocusType.Comics);
        break;
    }
  }

  goTop(){
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  goBottom(){
    var body = document.body,
    html = document.documentElement;

    var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    window.scrollTo({
      top: height,
      behavior: "smooth"
    });
  }

  lazyLoad(entry: FocusType){
    this.loadLazy = true;
    switch(entry){
      case FocusType.Comics:
        this.dataService.getComics(this.comics.length, this.searchTerm).subscribe((res:Hero[])=>{
          this.comics.push(...res);
          this.current = this.comics;
          this.loadLazy = false;
        });
        break;
      case FocusType.Events:
        this.dataService.getEvents(this.events.length, this.searchTerm).subscribe((res:Hero[])=>{
          this.events.push(...res);
          this.current = this.events;
          this.loadLazy = false;
        });
        break;
      case FocusType.Heroes:
        this.dataService.getHeroes(this.heroes.length, this.searchTerm).subscribe((res:Hero[])=>{
          this.heroes.push(...res);
          this.current = this.heroes;
          this.loadLazy = false;
        });
        break;
    }
  }

}
