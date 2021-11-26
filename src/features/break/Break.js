import { useSelector, useDispatch } from "react-redux";
import { breakLength, decrement, increment } from "./breakSlice";
import {
	CssBaseline,
	Typography,
	Container,
	Button,
	Paper,
} from "@material-ui/core";
import useStyles from "../styles";

export function Break() {
	const classes = useStyles();
	const breakLeng = useSelector(breakLength);
	const dispatch = useDispatch();
	return (
		<>
			<CssBaseline />
			<Container maxWidth="sm" id="break-label" className={classes.container}>
				<Paper className={classes.paper} elevation={24}>
					<Typography
						variant="h3"
						align="center"
						color="textPrimary"
						gutterBottom
					>
						Break length
					</Typography>
					<div>
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
					</div>
				</Paper>
			</Container>
		</>
	);
}
