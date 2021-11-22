import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 0,
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
	},
});

export const { increment, decrement } = breakSlice.actions;

export const selectCount = (state) => state.break.value;

export default breakSlice.reducer;
