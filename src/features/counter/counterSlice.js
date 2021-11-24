import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	time: "25:00",
	isSession: true,
	isPlaying: false, //for play/stop button
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
			state.isPlaying = !state.isPlaying;
		},
		toggleStop: (state) => {
			state.isPlaying = false;
		},
		toggleReset: (state) => {
			state.time = "25:00";
		},
		// Use the PayloadAction type to declare the contents of `action.payload`
	},
});

export const { toggleTimer, toggleStop, toggleReset, toggleSession } =
	counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.counter.time;

export default counterSlice.reducer;
