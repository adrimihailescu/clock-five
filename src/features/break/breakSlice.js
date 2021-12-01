import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 5,
};

export const breakSlice = createSlice({
	name: "break",
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		toggleReset2: (state) => {
			state.value = 5;
		},
	},
});

export const { increment, decrement, toggleReset2 } = breakSlice.actions;

export const breakLength = (state) => state.break.value;

export default breakSlice.reducer;
