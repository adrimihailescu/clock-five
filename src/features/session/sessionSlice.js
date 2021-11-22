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
	},
});

export const { increment, decrement } = sessionSlice.actions;

export const selectCount = (state) => state.session.value;

export default sessionSlice.reducer;
