import store from './store'; 
import { actions } from './ducks/employees';

store.dispatch(actions.fetchEmployees());

// import * as FLAVORS from './constants/flavors';

// import { actions } from './ducks/freezer';
 
// store.dispatch(actions.updateTemperature(-8));
 
// store.dispatch(actions.addProductToFreezer(FLAVORS.VANILLA, 15));

// store.dispatch(actions.doSomething());  // dispatch thunk action


 