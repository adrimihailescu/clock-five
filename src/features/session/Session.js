import { useSelector, useDispatch } from "react-redux";
import {
	CssBaseline,
	Button,
	Typography,
	Paper,
	Grid,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

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
						<Grid>
							<Typography component="span" className={classes.typography}>
								{sessionLeng}
							</Typography>
						</Grid>
						<Grid direction="row" className={classes.button}>
							<Button variant="outlined" size="small" color="secondary">
								<RemoveIcon onClick={() => dispatch(decrement())}>-</RemoveIcon>
							</Button>

							<Button variant="outlined" size="small" color="primary">
								<AddIcon onClick={() => dispatch(increment())}>+</AddIcon>
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
			{/* </Container> */}
		</>
	);
}
