import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCount } from "../session/sessionSlice";
import { startTimer, stopTimer } from "./counterSlice";

// function formatTime() {
// 	let minutes = Math.floor(time / 60);
// 	let time = minutes * 60;
// 	let seconds = parseInt(time % 60, 10);
// 	return `${minutes < 10 ? `0${minutes}` : minutes}:${
// 		seconds < 10 ? `0${seconds}` : seconds
// 	}`;
// }

export function Counter() {
	const count = useSelector(selectCount);
	const dispatch = useDispatch();
	const [incrementAmount, setIncrementAmount] = useState("25:00");

	// const incrementValue = Number(incrementAmount) || 25;

	return (
		<div>
			<div>
				<h2>Session</h2>
				<input
					type="text"
					aria-label="Set increment amount"
					value={count}
					onChange={(e) => setIncrementAmount(e.target.value)}
				/>

				<button id="start_stop">Play</button>
				<button id="start_stop">Stop Session</button>
				<button id="reset">Reset</button>
			</div>
		</div>
	);
}
