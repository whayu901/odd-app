import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import reducer from "./reducers";

let middleware: any[] = [thunk];

middleware = [...middleware, logger];

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
