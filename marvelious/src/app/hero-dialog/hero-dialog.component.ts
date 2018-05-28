import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from '../model';

@Component({
  selector: 'mrv-hero-dialog',
  templateUrl: './hero-dialog.component.html',
  styleUrls: ['./hero-dialog.component.scss']
})
export class HeroDialogComponent implements OnInit {

  hero: Hero;

  constructor(
    public dialogRef: MatDialogRef<HeroDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.hero = data.hero;
      console.log(this.hero);
    }

  ngOnInit() {
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
