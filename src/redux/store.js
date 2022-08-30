import { createStore } from 'redux';
import {combineReducers} from 'redux';
import testReducer from './reducers/testReducer';

import carsReducer from './reducers/carsReducer';
import detailsReducer from './reducers/detailsReducer'

const mainReducer = combineReducers({
    firstReducer: testReducer,
    cars: carsReducer,
    selectCar: detailsReducer
});
const store = createStore(mainReducer);


export default store;