import { ActionTree } from 'vuex';
import { MapState } from './state';
import { StateInterface } from '../index';
import {directionApi} from '@/api';
import { DirectionsResponse } from '@/interfaces/direction';

export type LngLat = [number, number]



const actions: ActionTree<MapState, StateInterface> = {
    async getRouteBetweenPoints( { commit }, {start, end} : {start: LngLat, end: LngLat} ) {
        // a line to prevent linter errors
        const resp = await directionApi.get<DirectionsResponse>(`${start.join (',') };${end.join(',') }`);
        commit('setDistanceDuration',{
            distance: resp.data.routes[0].distance,
            duration: resp.data.routes[0].duration,
        })
    
        commit('setRoutePolyline',resp.data.routes[0].geometry.coordinates)
    }
}



export default actions;