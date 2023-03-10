import { Module } from 'vuex';
import { StateInterface } from '../index';

import state, { PlacesState } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';


const mapModules: Module<PlacesState, StateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default mapModules;