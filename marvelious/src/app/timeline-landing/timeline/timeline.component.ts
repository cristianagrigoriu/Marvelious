import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../model';
import { MatDialog } from '@angular/material/dialog';
import { HeroDialogComponent } from '../../hero-dialog/hero-dialog.component';

@Component({
  selector: 'mrv-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input() heroes: Hero[];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(hero: Hero): void {
    let dialogRef = this.dialog.open(HeroDialogComponent, {
      width: '50vw',
      height: '50vh',
      data: { hero: hero }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

}
