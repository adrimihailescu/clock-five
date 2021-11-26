import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { Counter } from "./features/counter/Counter";
import { Session } from "./features/session/Session";
import { Break } from "./features/break/Break";
import "./App.css";
import useStyles from "./features/styles";

function App() {
	const classes = useStyles();
	return (
		<>
			<Typography variant="h1" classes={classes.header}>
				25+5 Clock
			</Typography>
			<Grid
				container
				direction="row"
				justifyContent="center"
				c
				alognItems="center"
				className="App"
			>
				<div>
					<Break />
					<Session />
				</div>
				<Counter />
			</Grid>
		</>
	);
}

export default App;
