import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementByAmount } from "./counterSlice";

export function Counter() {
	// const count = useSelector(selectCount);
	const dispatch = useDispatch();
	const [incrementAmount, setIncrementAmount] = useState("1");

	const incrementValue = Number(incrementAmount) || 0;

	return (
		<div>
			<div>
				<input
					aria-label="Set increment amount"
					value={incrementAmount}
					onChange={(e) => setIncrementAmount(e.target.value)}
				/>
				<button onClick={() => dispatch(incrementByAmount(incrementValue))}>
					Add Amount
				</button>
			</div>
		</div>
	);
}
