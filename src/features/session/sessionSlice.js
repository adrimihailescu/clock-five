import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 25,
};

export const sessionSlice = createSlice({
	name: "session",
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		toggleReset: (state) => {
			state.value = 25;
		},
	},
});

export const { increment, decrement, toggleReset } = sessionSlice.actions;

export const sessionLength = (state) => state.session.value;

export default sessionSlice.reducer;
