import { Component, OnInit, Input, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() savingData;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    }

    modalData = this.data.episodes.map(info => ({...info}));
  
    drop(event: CdkDragDrop<any>) {
      moveItemInArray(this.modalData, event.previousIndex, event.currentIndex);
    }

  binClick(index): void {
    this.modalData.splice(index, 1)
  }

  eyeClick(index): void {
    this.modalData[index].show = !this.modalData[index].show;
  }

  onSave(): void {
    this.data.saveData(this.modalData.map(info => ({...info})));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
