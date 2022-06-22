import React, { useState, useEffect } from "react";
import {
	Grid,
	FormGroup,
	TextField,
	Card,
	Box,
	InputAdornment,
	IconButton,
	Divider,
	CardContent,
	CardHeader,
	CardActions,
	Button,
	CircularProgress,
	FormControlLabel,
	Switch,
	Typography,
	Select,
	TextareaAutosize,
} from "@material-ui/core";
// import { useHistory, useParams } from "react-router-dom";
import { pickBy } from "lodash";
// import { resetRefreshTokenFailure } from "helpers";
import useStyles from "./styles";
import Layout from "../../layouts/Layout";

const ClassCreate = ({ className = "", ...rest }) => {
	// const contentClasses = useStylesContent();
	// const cardClasses = useStylesCard();
	const classes = useStyles();
	// const history = useHistory();
	const [id, setId] = useState(null);

	const [imageDialog, setImageDialog] = useState({
		field: "",
		isOpen: false,
	});
	const [password, setPassword] = useState({
		value: "",
		msg: "",
		error: false,
		isShow: false,
	});
	const [rePassword, setRePassword] = useState({
		value: "",
		msg: "",
		error: false,
		isShow: false,
	});
	const [fullName, setFullName] = useState({
		value: "",
		msg: "",
		error: false,
	});
	const [position, setPosition] = useState({
		value: "",
		msg: "",
		error: false,
	});
	const [department, setDepartment] = useState({
		value: "",
		msg: "",
		error: false,
	});
	const [userName, setUserName] = useState({
		value: "",
		msg: "",
		error: false,
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	function handleToggleShowPassword() {
		password.isShow = !password.isShow;
		setPassword({ ...password });
	}
	function handleToggleShowRePassword() {
		rePassword.isShow = !rePassword.isShow;
		setRePassword({ ...rePassword });
	}
	const getPassword = (event) => {
		setPassword({ value: event.target.value });
	};
	const getRePassword = (event) => {
		setRePassword({ value: event.target.value });
	};
	const getFullName = (event) => {
		setFullName({ value: event.target.value });
	};
	const getPosition = (event) => {
		setPosition({ value: event.target.value });
	};
	const getDepartment = (event) => {
		setDepartment({ value: event.target.value });
	};

	const getUserName = (event) => {
		setUserName({ value: event.target.value });
	};

	const createBody = () => {
		let body = {};
		body = {
			password: password.value,
			fullName: fullName.value,
			userName: userName.value,
			position: position.value,
			department: department.value,
		};
		body = pickBy(body);
		return body;
	};
	function validate() {
		let valid = true;
		if (password.value && !regexPassword.test(password.value)) {
			setPassword({
				...password,
				msg: message.error.passwordFormat,
				error: true,
			});
			valid = false;
		}
		if (password.value && password.value !== rePassword.value) {
			setRePassword({
				...rePassword,
				msg: message.error.comparePassword,
				error: true,
			});
			valid = false;
		}
		if (fullName.value === "") {
			setFullName({
				...fullName,
				msg: message.error.fullName,
				error: true,
			});
			valid = false;
		}
		if (userName.value === "") {
			setUserName({
				...userName,
				msg: message.error.userName,
				error: true,
			});
			valid = false;
		}
		if (position.value === "") {
			setPosition({
				...position,
				msg: message.error.position,
				error: true,
			});
			valid = false;
		}
		if (department.value === "") {
			setDepartment({
				...department,
				msg: message.error.department,
				error: true,
			});
			valid = false;
		}
		if (
			fullName.value &&
			(fullName.value.length < 8 || fullName.value.length > 25)
		) {
			setFullName({
				...fullName,
				msg: message.error.fullNameFormat,
				error: true,
			});
			valid = false;
		}

		return valid;
	}
	async function handleSubmit() {
		// let body;
		// const valid = validate();
		// if (valid) {
		// 	setIsSubmitting(true);
		// 	body = createBody();
		// 	const res = await createUser(body);
		// 	setIsSubmitting(false);
		// 	if (res && res.status === httpStatus.OK) {
		// 		const { data, errorCode, message } = res.data;
		// 		if (data && !errorCode) {
		// 			updateAppStore((draft) => {
		// 				draft.notification = {
		// 					isShow: true,
		// 					type: NOTIFICATION_TYPES.success,
		// 					message: t("add_success"),
		// 				};
		// 			});
		// 			history.push(`/${routeUrls.userList.path}`);
		// 		}
		// 		if (errorCode) {
		// 			updateAppStore((draft) => {
		// 				draft.notification = {
		// 					isShow: true,
		// 					type: NOTIFICATION_TYPES.error,
		// 					message: message,
		// 				};
		// 			});
		// 		}
		// 	} else {
		// 		handleError(res);
		// 	}
		// }
		alert("Tạo lớp học mới thành công!");
	}
	const handleError = (res) => {
		if (res) {
			switch (res.status) {
				case httpStatus.UNAUTHORIZED: {
					resetRefreshTokenFailure();
					history.push(`/${routeUrls.login.path}`);
					break;
				}
				default:
					updateAppStore((draft) => {
						draft.notification = {
							isShow: true,
							type: NOTIFICATION_TYPES.error,
							message: t("error_server"),
						};
					});
					break;
			}
		}
	};
	const goBack = () => {
		history.push("/class/class");
	};
	return (
		<Layout>
			{" "}
			<div className="ml-80 mt-10">
				<Grid container>
					<Grid item md={12} xs={12}>
						<Card>
							<CardContent>
								{/* <FormGroup autoComplete="off"> */}
								<Grid
									item
									md={6}
									xs={6}
									className={classes.gridItem}
								>
									<div>Thông tin lớp học</div>
									<Box className={classes.contentBox}>
										<TextField
											id="name"
											label="Tên môn học"
											placeholder="Nhập tên môn học"
											// variant="outlined"
											fullWidth
											// margin="dense"
											onChange={getUserName}
											rows={1}
											value={userName.value}
											helperText={userName.msg}
											error={userName.error}
											// required
										/>
									</Box>
									<Box className={classes.contentBox}>
										<TextField
											id="position"
											label="Năm học"
											placeholder="Nhập năm học"
											// variant="outlined"
											fullWidth
											margin="dense"
											onChange={getPosition}
											rows={1}
											value={position.value}
											helperText={position.msg}
											error={position.error}
											required
										/>
									</Box>
									<Box className={classes.contentBox}>
										<TextField
											id="department"
											label="Sỉ số"
											placeholder="Nhập sỉ số"
											// variant="outlined"
											fullWidth
											margin="dense"
											onChange={getDepartment}
											rows={1}
											value={department.value}
											helperText={department.msg}
											error={department.error}
											required
										/>
									</Box>
									<Box className={classes.contentBox}>
										<TextField
											id="department"
											label="Giáo viên phụ trách"
											placeholder="Nhập giáo viên phụ trách"
											// variant="outlined"
											fullWidth
											margin="dense"
											onChange={getFullName}
											rows={1}
											value={fullName.value}
											helperText={fullName.msg}
											error={fullName.error}
											required
										/>
									</Box>
								</Grid>
								<Grid item md={12} xs={12}>
									{/* <Button
												className={classes.clearForm}
												onClick={goBack}
												variant="outlined"
											>
												Quay lại
											</Button> */}
									<Button
										className={classes.addButton}
										variant="outlined"
										onClick={handleSubmit}
										color="primary"
									>
										Xác nhận
									</Button>
								</Grid>
								{/* </FormGroup> */}
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</div>
		</Layout>
	);
};

export default ClassCreate;
