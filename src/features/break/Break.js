import { useSelector, useDispatch } from "react-redux";
import { breakLength, decrement, increment } from "./breakSlice";
import {
	CssBaseline,
	Typography,
	Button,
	ButtonGroup,
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
			<Paper className={classes.paper} elevation={24}>
				<Grid container direction="column">
					<Grid direction="row">
						<Typography variant="h2" align="center" className={classes.title}>
							Break length
						</Typography>
					</Grid>
					<Grid>
						<Typography component="h3" className={classes.typography}>
							{breakLeng}
						</Typography>
					</Grid>
					<Grid direction="row">
						<ButtonGroup>
							<Button
								variant="outlined"
								size="small"
								color="secondary"
								disabled={breakLeng === 1}
							>
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
						</ButtonGroup>
					</Grid>
				</Grid>
			</Paper>
		</>
	);
}
