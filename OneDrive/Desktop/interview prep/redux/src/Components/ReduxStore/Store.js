import { createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import myReducer from "../Reducers/myReducer";
const mystore = createStore(myReducer,applyMiddleware(logger))
export default mystore;