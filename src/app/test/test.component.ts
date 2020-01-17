import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Episodes } from '../models/episodes.model';
import { AppState  } from '../app.state';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  episodes: Observable<Episodes>;

  constructor(
    private store: Store<AppState>
    ) {
      this.episodes = store.select('episodes')
    }

  ngOnInit() {
  }

}
