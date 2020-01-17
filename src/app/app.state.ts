import { Episodes } from './models/episodes.model';

export interface AppState {
  readonly episodes: Episodes;
}