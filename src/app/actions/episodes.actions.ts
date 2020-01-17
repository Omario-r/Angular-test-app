import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Episodes } from '../models/episodes.model';

export const SAVE_EPISODES = '[Episodes] Save';

export class SaveEpisodes implements Action {
  readonly type = SAVE_EPISODES;

  constructor(public payload: Episodes) {}
}

export type Actions = SaveEpisodes;