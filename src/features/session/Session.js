import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectCount } from "./sessionSlice";

export function Session() {
	const count = useSelector(selectCount);
	const dispatch = useDispatch();
	return (
		<div>
			<div id="session-label" className="session">
				<div>
					<h2> Session length</h2>
					<button
						aria-label="Decrement value"
						onClick={() => dispatch(decrement())}
					>
						-
					</button>
					<span>{count}</span>
					<button
						aria-label="Increment value"
						onClick={() => dispatch(increment())}
					>
						+
					</button>
				</div>
			</div>
		</div>
	);
}
