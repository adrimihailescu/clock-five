import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sessionLength, toggleReset } from "../session/sessionSlice";
import { toggleTimer, toggleStop, counterIsCounting } from "./counterSlice";

// source: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback, delay) {
	const savedCallback = useRef();

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	// Set up the interval.
	useEffect(() => {
		function tick() {
			savedCallback.current();
		}
		if (delay !== null) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
}

export function Counter() {
	const sessionLengthState = useSelector(sessionLength);
	const counterIsCountingState = useSelector(counterIsCounting);
	const dispatch = useDispatch();
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(sessionLengthState);

	useInterval(
		() => {
			if (minutes || seconds) {
				if (seconds > 0) {
					setSeconds(seconds - 1);
				}
				if (seconds === 0) {
					if (minutes === 0) {
						console.log("ran out of time");
						dispatch(toggleStop());
					} else {
						setMinutes(minutes - 1);
						setSeconds(59);
					}
				}
			}
		},
		counterIsCountingState ? 1000 : null
	);

	useEffect(() => {
		setMinutes(sessionLengthState);
	}, [sessionLengthState]);

	return (
		<div>
			<div>
				<h2>Timer</h2>
				<p>
					{minutes.toString().length === 1 ? `0${minutes}` : minutes}:
					{seconds.toString().length === 1 ? `0${seconds}` : seconds}
				</p>

				<button id="start_stop" onClick={() => dispatch(toggleTimer())}>
					Play/Pause
				</button>
				<button id="start_stop" onClick={() => dispatch(toggleStop())}>
					Stop Session
				</button>
				<button
					id="reset"
					onClick={() => {
						dispatch(toggleReset());
						dispatch(toggleStop());
						setSeconds(0);
						setMinutes(sessionLengthState);
					}}
				>
					Reset
				</button>
			</div>
		</div>
	);
}
