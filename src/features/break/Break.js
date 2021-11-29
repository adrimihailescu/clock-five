import { useSelector, useDispatch } from "react-redux";
import { breakLength, decrement, increment } from "./breakSlice";
import {
	CssBaseline,
	Typography,
	Button,
	Paper,
	Grid,
} from "@material-ui/core";
import useStyles from "../styles";

export function Break() {
	const classes = useStyles();
	const breakLeng = useSelector(breakLength);
	const dispatch = useDispatch();
	return (
		<>
			<CssBaseline />
			{/* <Container maxWidth="sm" id="break-label" className={classes.container}> */}
			<Paper className={classes.paper} elevation={24}>
				<Grid container direction="column">
					<Grid direction="row">
						<Typography variant="h2" align="center" className={classes.title}>
							Break length
						</Typography>
					</Grid>
					<Grid>
						<Button
							variant="contained"
							size="small"
							color="secondary"
							aria-label="Decrement value"
							onClick={() => dispatch(decrement())}
						>
							-
						</Button>
						<Typography component="span" className={classes.typography}>
							{breakLeng}
						</Typography>
						<Button
							variant="contained"
							color="primary"
							size="small"
							aria-label="Increment value"
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
