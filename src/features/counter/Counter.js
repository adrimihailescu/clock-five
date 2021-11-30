import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sessionLength, toggleReset } from "../session/sessionSlice";
import { toggleTimer, toggleStop, counterIsCounting } from "./counterSlice";
import {
	CssBaseline,
	Paper,
	Typography,
	Button,
	ButtonGroup,
	Grid,
} from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";
import RefreshIcon from "@material-ui/icons/Refresh";
import PauseIcon from "@material-ui/icons/Pause";
import useStyles from "../styles";

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
	const classes = useStyles();
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
		<>
			<CssBaseline />
			<Paper className={classes.paper} elevation={24}>
				<Grid
					container
					direction="column"
					justifyContent="center"
					alignItems="center"
					className={classes.grid}
				>
					<Grid direction="row">
						<Typography variant="h2" className={classes.title}>
							Timer
						</Typography>
					</Grid>
					<Grid direction="row">
						<Typography
							variant="h3"
							id="timer-label"
							className={classes.typography}
						>
							{minutes.toString().length === 1 ? `0${minutes}` : minutes}:
							{seconds.toString().length === 1 ? `0${seconds}` : seconds}
						</Typography>
					</Grid>
					<Grid>
						<ButtonGroup>
							<Button
								id="start_stop"
								variant="outlined"
								size="small"
								color="primary"
								onClick={() => dispatch(toggleTimer())}
							>
								<PlayArrowIcon />
								<PauseIcon>Play/Pause</PauseIcon>
							</Button>
							{/* <Button variant="outlined" size="small" color="primary">
								<StopIcon
									id="start_stop"
									onClick={() => dispatch(toggleStop())}
								>
									Stop
								</StopIcon>
							</Button> */}
							<Button variant="outlined" size="small" color="primary">
								<RefreshIcon
									id="reset"
									onClick={() => {
										dispatch(toggleReset());
										dispatch(toggleStop());
										setSeconds(0);
										setMinutes(sessionLengthState);
									}}
								>
									Reset
								</RefreshIcon>
							</Button>
						</ButtonGroup>
					</Grid>
				</Grid>
			</Paper>
		</>
	);
}
