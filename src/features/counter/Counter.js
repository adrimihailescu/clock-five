import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	toggleTimer,
	toggleStop,
	toggleReset,
	toggleSession,
	selectCount,
} from "./counterSlice";

export function Counter() {
	const count = useSelector(selectCount);
	const dispatch = useDispatch();
	// const [session, setSession] = useState("25:00");

	// const incrementValue = Number(incrementAmount) || 25;

	return (
		<div>
			<div>
				<h2>Session</h2>
				{/* <input
					type="text"
					value={count}
					// onChange={(e) => setIncrementAmount(e.target.value)}
				/> */}
				<p>{count}</p>
				<button id="start_stop" onClick={() => dispatch(toggleTimer())}>
					Play/Pause
				</button>
				<button id="start_stop" onClick={() => dispatch(toggleStop())}>
					Stop Session
				</button>
				<button id="reset" onClick={() => dispatch(toggleReset())}>
					Reset
				</button>
			</div>
		</div>
	);
}
