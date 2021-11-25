import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isSession: true,
	isCounting: false, //for play/stop button
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		toggleSession: (state) => {
			state.isSession = !state.isSession;
		},
		toggleTimer: (state) => {
			state.isCounting = !state.isCounting;
		},
		toggleStop: (state) => {
			state.isCounting = false;
		},
	},
});

export const { toggleTimer, toggleStop, toggleSession } = counterSlice.actions;

export const counterIsCounting = (state) => state.counter.isCounting;

export default counterSlice.reducer;
