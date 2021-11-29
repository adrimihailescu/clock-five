import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	container: {
		padding: "40px",
		display: "grid",
	},
	button: {
		padding: "10px",
	},
	paper: {
		border: "1px solid red",
		padding: "20px",
		backgroundColor: "lightpink",
		justifyContent: "center",
		"&:hover": {
			background: "lightgrey",
		},
		textAlign: "center",
	},
	typography: {
		fontSize: "60px",
		padding: "10px",
	},
	header: {
		display: "grid",
		alignItems: "center",
		justifyContent: "center",
	},
	grid: {
		display: "grid",
		padding: "20px",
		justifyContent: "center",
	},
	title: {
		fontSize: "40px",
	},
	timer: {
		fontSize: "40px",
	},
	main: {
		display: "grid",
		margin: "30px",
		backgroundColor: "background-color: #fee2f8",
		backgroundImage: "linear-gradient(315deg, #fee2f8 0%, #dcf8ef 74%)",
		// paddingBottom: "20px",
		alignItems: "center",
		// justifyContent: "center",
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
		padding: "10px",
	},
	break: {
		padding: "10px",
	},
	session: {
		padding: "10px",
	},
}));

export default useStyles;
