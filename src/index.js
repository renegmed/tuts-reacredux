import store from './store'; 
import * as FLAVORS from './constants/flavors';

import { actions } from './ducks/freezer';
 
store.dispatch(actions.updateTemperature(-8));
 
store.dispatch(actions.addProductToFreezer(FLAVORS.VANILLA, 15));
 