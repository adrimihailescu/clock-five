import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { breakLength, decrement, increment } from "./breakSlice";

export function Break() {
	const breakLeng = useSelector(breakLength);
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
					<span>{breakLeng}</span>
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
