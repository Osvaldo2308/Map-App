import { createStore } from 'vuex';

import mapModules from './places';
import { PlacesState } from './places/state';

import mapModule from './map';
import { MapState } from './map/state';

export interface StateInterface {
  places: PlacesState
  map: MapState
}

export default createStore<StateInterface>({
  modules: {
  places: mapModules,
  map: mapModule
  }
})