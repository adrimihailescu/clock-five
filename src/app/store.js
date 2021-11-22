import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import breakReducer from "../features/break/breakSlice";
import sessionReducer from "../features/session/sessionSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		break: breakReducer,
		session: sessionReducer,
	},
});
