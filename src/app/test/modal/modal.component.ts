import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    // @Inject(MAT_DIALOG_DATA)
    ) {}

    movies = [
      'Episode I - The Phantom Menace',
      'Episode II - Attack of the Clones',
      'Episode III - Revenge of the Sith',
      'Episode IV - A New Hope',
      'Episode V - The Empire Strikes Back',
      'Episode VI - Return of the Jedi',
      'Episode VII - The Force Awakens',
      'Episode VIII - The Last Jedi'
    ];
  
    drop(event: CdkDragDrop<string[]>) {
      moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
