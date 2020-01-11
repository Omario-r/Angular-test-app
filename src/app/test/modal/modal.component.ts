import { Component, OnInit, Input, Inject} from '@angular/core';
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
    @Inject(MAT_DIALOG_DATA) public data) {}

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
