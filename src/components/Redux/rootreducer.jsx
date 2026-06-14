import { combineReducers } from "redux";
import ReducerBanner from "./Banner/ReducerBanner";

const rootreducer = combineReducers({
banner: ReducerBanner,
});
export default rootreducer;
