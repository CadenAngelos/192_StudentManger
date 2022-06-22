import React, { useState, useEffect } from "react";
import clsx from "clsx";
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
import Layout from "../../layouts/Layout";
import useStyles from "./styles";
import AddImageIcon from "@material-ui/icons/AddAPhotoOutlined";
import styles from "../../styles/teacher/Assess0.module.css";
const Detail = ({ className = "", ...rest }) => {
	const classes = useStyles();

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

	const goBack = () => {
		history.push(`/${routeUrls.userList.path}`);
	};
	return (
		<Layout>
			<div className="ml-96 pl-40 mb-48 mt-20">
				<div className={styles.title}>HỒ SƠ HỌC SINH</div>
				<div className="flex gap-12 text-lg font-semibold mt-2">
					<div>Họ và tên:</div>
					<div>Nguyễn Văn A</div>
				</div>
				<div className="flex gap-12 text-lg font-semibold  mt-2">
					<div className="mr-2">Giới tính:</div>
					<div>Nam</div>
				</div>
				<div className="flex gap-12 text-lg font-semibold  mt-2">
					<div>Ngày sinh:</div>
					<div>02/05/2001</div>
				</div>
				<div className="flex gap-12 text-lg font-semibold  mt-2">
					<div className="mr-5">Địa chỉ:</div>
					<div>15 Nguyễn Hữu Cầu, p7, Q3, TPHCM</div>
				</div>
				<div className="flex gap-12 text-lg font-semibold  mt-2">
					<div className="mr-8">Email:</div>
					<div>nguyenvana@gmail.com</div>
				</div>
			</div>
		</Layout>
	);
};

export default Detail;
