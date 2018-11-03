import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as freezer} from './ducks/freezer';
import { reducer as orders } from './ducks/orders';
import logger from './middleware/logger';

const rootReducer = combineReducers({
    freezer,
    orders,
});

export default createStore(rootReducer, applyMiddleware(logger));