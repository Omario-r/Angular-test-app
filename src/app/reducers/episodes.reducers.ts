import { createReducer, on } from '@ngrx/store';
import * as EpisodesActions from '../actions/episodes.actions';
import { Episodes } from '../models/episodes.model';

const initialState: Episodes = [
  { name:'Episode I - The Phantom Menace', show: true },
  { name:'Episode II - Attack of the Clones', show: true },
  { name:'Episode III - Revenge of the Sith', show: true },
  { name:'Episode IV - A New Hope', show: true },
  { name:'Episode V - The Empire Strikes Back', show: true },
  { name:'Episode VI - Return of the Jedi', show: true },
  { name:'Episode VII - The Force Awakens', show: true },
  { name:'Episode VIII - The Last Jedi', show: true }
];

export function EpisodesReducer(state: Episodes = initialState, action: EpisodesActions.Actions) {
  switch(action.type) {
    case EpisodesActions.SAVE_EPISODES:
      return action.payload;
    default:
      return state;
  }
}
