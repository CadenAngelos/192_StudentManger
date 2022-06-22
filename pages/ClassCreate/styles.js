import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: 24,
	},
	heading: {
		// fontSize: theme.typography.pxToRem(15),
		flexBasis: "33.33%",
		flexShrink: 0,
		fontWeight: 500,
	},
	contentBox: {
		display: "flex",
		flexDirection: "column",
		"&>div>label>span": {
			color: "red",
		},
		"&>div>div>div>label>span": {
			color: "red",
		},
	},
	gridItem: {
		padding: 8,
	},
	select: {
		paddingTop: 8,
	},
	buttonUpload: {
		boxShadow: "none",
	},
	buttonUploadWrapper: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	uploadButton: {
		position: "absolute",
		// margin: theme.spacing(0.5),
		boxShadow: "none",
		background: "transparent",
		"&:hover": {
			// color: theme.palette.primary.light,
			background: "transparent",
		},
	},
	image: {
		boxShadow:
			"0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)",
		// borderRadius: theme.spacing(1),
		maxWidth: 200,
		maxHeight: 200,
	},
	imageCover: {
		boxShadow:
			"0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)",
		// borderRadius: theme.spacing(1),
		maxWidth: "100%",
		maxHeight: 200,
	},
	coverPlaceholder: {
		flex: 1,
		boxShadow:
			"0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)",
		// borderRadius: theme.spacing(1),
		maxWidth: "100%",
		maxHeight: 200,
	},
	sectionTitle: {
		// color: theme.palette.info.dark,
		fontSize: 16,
		fontWeight: 500,
		// padding: theme.spacing(2),
		// paddingTop: theme.spacing(5),
	},
	coverWrapper: {
		display: "flex",
		flexDirection: "column",
	},
	helperTextContent: {
		// color: theme.palette.error.main,
		fontSize: 11,
	},
	addButton: {
		// background: theme.palette.secondary.main,
		width: "200px",
		// color: theme.palette.primary.main,
		"&:hover": {
			// background: theme.palette.secondary.dark,
		},
		// margin: theme.spacing(2),
	},
	clearForm: {
		width: "200px",
		// margin: theme.spacing(2),
	},
	boxButton: {
		display: "flex",
		// margin: theme.spacing(2),
		justifyContent: "center",
	},
	backIcon: {
		justifyContent: "flex-start",
		padding: "0px 0px 5px 0px",
		"&:hover": {
			background: "transparent",
		},
	},
}));

export default useStyles;
