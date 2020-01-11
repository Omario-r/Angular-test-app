import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

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

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '550px',
      panelClass: 'modal-class',
      data: this.data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', this.data);
      
    });
  }

  ngOnInit() {
  }

}
