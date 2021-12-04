import { createStore  , applyMiddleware , compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from './redux/reducers'

const initialState = {}

const middleWare = [thunk]

export const store = createStore(rootReducer , initialState , compose(

    applyMiddleware(...middleWare) ,

));

