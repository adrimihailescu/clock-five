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
		borderRadius: "20px",
		padding: "20px",
		backgroundColor: "#7fcec5",
		backgroundimage: "linear-gradient(-315deg, #7fcec5 0%, #14557b 74%)",

		justifyContent: "center",
		"&:hover": {
			backgroundColor: "#3bb78f",
			backgroundimage: "linear-gradient(315deg, #3bb78f 0%, #0bab64 74%)",
		},
		textAlign: "center",
	},
	typography: {
		fontSize: "60px",
		padding: "10px",
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
	timer: {
		fontSize: "40px",
	},
	main: {
		display: "grid",
		margin: "30px",
		backgroundcolor: "#55efc4",
		backgroundImage: "linear-gradient(315deg, #55efc4 0%, #000000 74%)",
		borderRadius: "20px",
		alignItems: "center",
	},
	app: {
		textAlign: "center",
	},
	grid1: {
		justifyContent: "center",
		alignItems: "center",
		padding: "10px",
	},
	grid2: {
		alignItems: "center",
		justifyContent: "center",
		padding: "20px",
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
