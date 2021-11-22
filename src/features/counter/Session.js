import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectCount } from "./counterSlice";
import styles from "./Counter.module.css";

export function Session() {
	const count = useSelector(selectCount);
	const dispatch = useDispatch();
	return (
		<div>
			<div id="session-label" className="session">
				<div className={styles.row}>
					<h2> Session length</h2>
					<button
						className={styles.button}
						aria-label="Decrement value"
						onClick={() => dispatch(decrement())}
					>
						-
					</button>
					<span className={styles.value}>{count}</span>
					<button
						className={styles.button}
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
