import store from './store'; 
import * as FLAVORS from './constants/flavors';

import { addProductToFreezer, updateTemperature } from './actions/freezer';

store.subscribe(() => console.log(store.getState()));  //listens to change of state and log the change

store.dispatch(updateTemperature(-8));
 
store.dispatch(addProductToFreezer(FLAVORS.VANILLA, 15));
 