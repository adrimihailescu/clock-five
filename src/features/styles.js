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
	},
	typography: {
		fontSize: "30px",
		padding: "10px",
	},
	header: {
		display: "grid",
		alignContent: "center",
	},
}));

export default useStyles;
