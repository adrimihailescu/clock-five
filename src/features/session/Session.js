import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { decrement, increment, sessionLength } from "./sessionSlice";

export function Session() {
	const sessionLeng = useSelector(sessionLength);
	const dispatch = useDispatch();
	return (
		<div>
			<div id="session-label" className="session">
				<div>
					<h2> Session length</h2>
					<button onClick={() => dispatch(decrement())}>-</button>
					<span>{sessionLeng}</span>
					<button onClick={() => dispatch(increment())}>+</button>
				</div>
			</div>
		</div>
	);
}
