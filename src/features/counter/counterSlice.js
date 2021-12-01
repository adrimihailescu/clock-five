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
		toggleBreak: (state) => {
			state.isBreak = !state.isBreak;
		},
	},
});

export const { toggleTimer, toggleStop, toggleSession, toggleBreak } =
	counterSlice.actions;

export const counterIsCounting = (state) => state.counter.isCounting;
export const counterIsSession = (state) => state.counter.isSession;

export default counterSlice.reducer;
