import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { Episodes } from '../../models/episodes.model';
import { AppState  } from '../../app.state';
import { SaveEpisodes } from '../../actions/episodes.actions';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  episodes: Observable<Episodes>;
  clearEpisodes: any;

  constructor(
    public dialog: MatDialog,
    private store: Store<AppState>
    ) {
      this.episodes = store.select('episodes')
      this.episodes.pipe(map(data => data)).subscribe(item => this.clearEpisodes = item)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '550px',
      panelClass: 'modal-class',
      data: { episodes: this.clearEpisodes, saveData: (data) => this.store.dispatch(new SaveEpisodes(data))}
    });

    dialogRef.afterClosed().subscribe(result => {
      // To do saving to store
      console.log('The dialog was closed', result);      
    });
  }

  ngOnInit() {
  }

}
