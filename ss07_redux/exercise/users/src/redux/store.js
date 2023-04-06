import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducer/index'



const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)


)
 export default store