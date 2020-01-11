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

    data = [
      { name:'Episode I - The Phantom Menace', show: true },
      { name:'Episode II - Attack of the Clones', show: true },
      { name:'Episode III - Revenge of the Sith', show: true },
      { name:'Episode IV - A New Hope', show: true },
      { name:'Episode V - The Empire Strikes Back', show: true },
      { name:'Episode VI - Return of the Jedi', show: true },
      { name:'Episode VII - The Force Awakens', show: true },
      { name:'Episode VIII - The Last Jedi', show: true }
    ];

    eyeShow = true;
  
    drop(event: CdkDragDrop<string[]>) {
      moveItemInArray(this.data, event.previousIndex, event.currentIndex);
    }

  binClick(index): void {
    this.data = this.data.filter((info, i) => i !== index);
  }

  eyeClick(index): void {
    this.data[index].show = !this.data[index].show;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
