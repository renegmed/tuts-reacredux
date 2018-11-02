import store from './store'; 
import * as FLAVORS from './constants/flavors';

import { actions } from './ducks/freezer';

store.subscribe(() => console.log(store.getState()));  //listens to change of state and log the change

store.dispatch(actions.updateTemperature(-8));
 
store.dispatch(actions.addProductToFreezer(FLAVORS.VANILLA, 15));
 