import { useSelector, useDispatch } from "react-redux";
import { breakLength, decrement, increment } from "./breakSlice";
import {
	CssBaseline,
	Typography,
	Button,
	Paper,
	Grid,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
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
						<Typography component="span" className={classes.typography}>
							{breakLeng}
						</Typography>
					</Grid>
					<Grid direction="row" spacing={4}>
						<Button variant="outlined" size="small" color="secondary">
							<RemoveIcon
								aria-label="Decrement value"
								onClick={() => dispatch(decrement())}
							>
								-
							</RemoveIcon>
						</Button>

						<Button variant="outlined" color="primary" size="small">
							<AddIcon
								aria-label="Increment value"
								onClick={() => dispatch(increment())}
							>
								+
							</AddIcon>
						</Button>
					</Grid>
				</Grid>
			</Paper>
			{/* </Container> */}
		</>
	);
}
