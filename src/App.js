import React from "react";
import { Typography, Grid, CssBaseline, Paper } from "@material-ui/core";
import { Counter } from "./features/counter/Counter";
import { Session } from "./features/session/Session";
import { Break } from "./features/break/Break";
import "./App.css";
import useStyles from "./features/styles";

function App() {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />

			<main className={classes.clock}>
				<Typography variant="h1" className={classes.header}>
					25+5 Clock
				</Typography>
				<Paper className={classes.main} elevation={24}>
					<Grid
						container
						direction="row"
						alignItems="center"
						className={classes.app}
					>
						<Grid container direction="row" className={classes.grid1}>
							<Grid
								container
								direction="column"
								md={4}
								className={classes.break}
							>
								<Break />
							</Grid>
							<Grid
								container
								direction="column"
								md={4}
								className={classes.session}
							>
								<Session />
							</Grid>
						</Grid>

						<Grid container direction="row" className={classes.grid2}>
							<Grid container direction="column">
								<Counter />
							</Grid>
						</Grid>
					</Grid>
				</Paper>
			</main>
		</>
	);
}

export default App;
