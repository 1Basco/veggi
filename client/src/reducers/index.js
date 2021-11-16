import { combineReducers } from "redux";

import tasks from "./tasks";
import users from "./users";

export const reducers = combineReducers({ tasks, users });