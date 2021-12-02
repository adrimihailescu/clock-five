import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	clock: {
		backgroundcolor: "#55efc4",
		backgroundImage: "linear-gradient(-315deg, #55efc4 0%, #000000 74%)",
		minHeight: "100%",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		fontFamily: "Orbitron, sans-serif",
		padding: "0",
		margin: "0",
	},

	paper: {
		border: "1px solid green",
		borderRadius: "40px",
		padding: "20px",
		bbackgroundColor: "#9eabe4",
		backgroundImage: "linear-gradient(315deg, #9eabe4 0%, #77eed8 74%)",

		justifyContent: "center",
		"&:hover": {
			backgroundColor: "#deebdd",
			backgroundImage: "linear-gradient(315deg, #deebdd 0%, #bbdbbe 74%)",
		},
		textAlign: "center",
	},
	paperFix: {
		// padding: "10px",
		margin: "10px",
	},
	typography: {
		fontSize: "60px",
		// padding: "10px",
		color: "green",
		fontWeight: "500",
		fontFamily: "Orbitron, sans-serif",
	},
	header: {
		textAlign: "center",
		color: "limegreen",
		fontFamily: "Orbitron, sans-serif",
	},
	title: {
		fontSize: "40px",
		color: "green",
		fontWeight: "500",
		fontFamily: "Orbitron, sans-serif",
	},
	titleBreak: {
		color: "red",
	},
	count: {
		color: "red",
	},
	// timer: {
	// 	fontSize: "40px",
	// },
	main: {
		display: "grid",
		margin: "30px",
		backgroundColor: "#55efc4",
		backgroundImage: "linear-gradient(315deg, #55efc4 0%, #000000 74%)",
		borderRadius: "20px",
		alignItems: "center",
		padding: "10px",
		height: "100%",
	},
	app: {
		textAlign: "center",
	},
	grid1: {
		justifyContent: "center",
		alignItems: "center",
		// padding: "10px",
	},
	grid2: {
		alignItems: "center",
		justifyContent: "center",
		// padding: "10px",
	},
	break: {
		padding: "10px",
	},
	session: {
		padding: "10px",
	},
	button: {
		justifyContent: "space-between",
	},
});

export default useStyles;
