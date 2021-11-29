import { useSelector, useDispatch } from "react-redux";
import {
	CssBaseline,
	Button,
	Typography,
	Paper,
	Grid,
} from "@material-ui/core";

import { decrement, increment, sessionLength } from "./sessionSlice";
import useStyles from "../styles";

export function Session() {
	const classes = useStyles();
	const sessionLeng = useSelector(sessionLength);
	const dispatch = useDispatch();
	return (
		<>
			<CssBaseline />
			{/* <Container maxWidth="sm" id="session-label" className={classes.container}> */}
			<Paper className={classes.paper} elevation={24}>
				<Grid container direction="column">
					<Grid direction="row">
						<Typography variant="h2" aligh="center" className={classes.title}>
							{" "}
							Session length
						</Typography>
					</Grid>
					<Grid direction="row">
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
					</Grid>
				</Grid>
			</Paper>
			{/* </Container> */}
		</>
	);
}
