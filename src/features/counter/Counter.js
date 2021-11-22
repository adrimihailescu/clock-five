import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { incrementByAmount } from "./counterSlice";
import { increment, decrement } from "../session/sessionSlice";

export function Counter() {
	// const count = useSelector(selectCount);
	const dispatch = useDispatch();
	const [incrementAmount, setIncrementAmount] = useState("25:00");

	const incrementValue = Number(incrementAmount) || 25;

	return (
		<div>
			<div>
				<h2>Session</h2>
				<input
					aria-label="Set increment amount"
					value={incrementAmount}
					onChange={(e) => setIncrementAmount(e.target.value)}
				/>

				<button id="start_stop">Play</button>
				<button id="start_stop">Stop Session</button>
				<button id="reset">Reset</button>
			</div>
		</div>
	);
}
