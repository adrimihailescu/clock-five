import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectCount } from "./breakSlice";

export function Break() {
	const count = useSelector(selectCount);
	const dispatch = useDispatch();
	return (
		<div>
			<div id="break-label" className="break">
				<h2>Break lenght</h2>
				<div>
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
