import { useSelector, useDispatch } from "react-redux";
import {
	CssBaseline,
	Container,
	Button,
	Typography,
	Paper,
} from "@material-ui/core";
import useTyle from "../styles";

import { decrement, increment, sessionLength } from "./sessionSlice";
import useStyles from "../styles";

export function Session() {
	const classes = useStyles();
	const sessionLeng = useSelector(sessionLength);
	const dispatch = useDispatch();
	return (
		<>
			<CssBaseline />
			<Container maxWidth="sm" id="session-label" className={classes.container}>
				<Paper className={classes.paper} elevation={24}>
					<Typography variant="h3" aligh="center" gutterBottom>
						{" "}
						Session length
					</Typography>
					<div>
						<Button
							variant="contained"
							size="small"
							color="secondary"
							onClick={() => dispatch(decrement())}
						>
							-
						</Button>
						<Typography component="span" className={classes.typography}>
							{sessionLeng}
						</Typography>
						<Button
							variant="contained"
							size="small"
							color="primary"
							onClick={() => dispatch(increment())}
						>
							+
						</Button>
					</div>
				</Paper>
			</Container>
		</>
	);
}
