import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { ModalComponent } from './test/modal/modal.component';
import { EyeIconComponent } from './test/modal/eye-icon/eye-icon.component';

import { StoreModule } from '@ngrx/store';
import { EpisodesReducer  } from './reducers/episodes.reducers';
import { PanelComponent } from './test/panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    TestComponent,
    EyeIconComponent,
    PanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    DragDropModule,
    StoreModule.forRoot({ episodes: EpisodesReducer })
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
