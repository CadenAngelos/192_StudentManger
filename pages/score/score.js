import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../layouts/Layout";
import useStyles from "./styles";
import {
	Card,
	CardActions,
	CardContent,
	Table,
	TableHead,
	TableBody,
	TableCell,
	TableRow,
	Tooltip,
	IconButton,
	Typography,
	FormControlLabel,
	Switch,
	Input,
	MuiEditableTable,
} from "@material-ui/core";
import Link from "next/link";
import PerfectScrollbar from "react-perfect-scrollbar";
import EditIcon from "@material-ui/icons/EditOutlined";
import DoneIcon from "@material-ui/icons/DoneAllTwoTone";
import RevertIcon from "@material-ui/icons/NotInterestedOutlined";
import styles from "../../styles/teacher/Assess0.module.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
const createData = (name, calories, fat, carbs, protein) => ({
	id: name.replace(" ", "_"),
	name,
	calories,
	fat,
	carbs,
	protein,
	isEditMode: false,
});

const CustomTableCell = ({ row, name, onChange }) => {
	const classes = useStyles();
	const { isEditMode } = row;
	return (
		<TableCell align="left" className={classes.tableCell}>
			{isEditMode ? (
				<Input
					value={row[name]}
					name={name}
					onChange={(e) => onChange(e, row)}
					className={classes.input}
				/>
			) : (
				row[name]
			)}
		</TableCell>
	);
};

export default function Score() {
	const [rows, setRows] = React.useState([
		createData("Trần Trà My", 8.6, 8.6, 8.6),
		createData("Trần Hắc Long", 8.6, 8.6, 8.6),
		createData("Lê Hoài Thương", 8.6, 8.6, 8.6),
		createData("Nguyễn Thị Mỹ Lệ", 8.6, 8.6, 8.6),
		createData("Nguyễn Thị Tố Như", 8.6, 8.6, 8.6),
	]);
	const [previous, setPrevious] = React.useState({});
	const classes = useStyles();
	const onToggleEditMode = (id) => {
		setRows((state) => {
			return rows.map((row) => {
				if (row.id === id) {
					return { ...row, isEditMode: !row.isEditMode };
				}
				return row;
			});
		});
	};

	const onChange = (e, row) => {
		if (!previous[row.id]) {
			setPrevious((state) => ({ ...state, [row.id]: row }));
		}
		const value = e.target.value;
		const name = e.target.name;
		const { id } = row;
		const newRows = rows.map((row) => {
			if (row.id === id) {
				return { ...row, [name]: value };
			}
			return row;
		});
		setRows(newRows);
	};

	const onRevert = (id) => {
		const newRows = rows.map((row) => {
			if (row.id === id) {
				return previous[id] ? previous[id] : row;
			}
			return row;
		});
		setRows(newRows);
		setPrevious((state) => {
			delete state[id];
			return state;
		});
		onToggleEditMode(id);
	};
		const handleClickDelete = () => {
			alert("Xóa lớp thành công");
			router.push("/class/class");
		};

	return (
		<Layout>
			<Card className="m-4 p-5 pr-5">
				<CardContent className={classes.content}>
					<PerfectScrollbar>
						<div className="pr-40 pl-40">
							<div className={styles.title}>
								DANH SÁCH ĐIỂM HỌC SINH
							</div>
							<Table>
								<TableHead>
									<TableRow>
										<TableCell align="left">
											<div className=" text-blue-400 text-lg font-semibold ">
												Tên học sinh
											</div>{" "}
										</TableCell>
										<TableCell align="left">
											<div className="text-blue-400  text-lg font-semibold">
												Điểm 15p
											</div>{" "}
										</TableCell>
										<TableCell align="left">
											<div className="text-blue-400  text-lg font-semibold">
												Điểm 1 tiết
											</div>{" "}
										</TableCell>
										<TableCell align="left">
											<div className="text-blue-400  text-lg font-semibold">
												Điểm cuối kỳ
											</div>{" "}
										</TableCell>
										<TableCell align="left">
											<div className="text-blue-400  text-lg font-semibold">
												Chỉnh sửa
											</div>{" "}
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{rows.map((row) => (
										<TableRow key={row.id}>
											<CustomTableCell
												{...{
													row,
													name: "name",
													onChange,
												}}
											/>
											<CustomTableCell
												{...{
													row,
													name: "calories",
													onChange,
												}}
											/>
											<CustomTableCell
												{...{
													row,
													name: "fat",
													onChange,
												}}
											/>
											<CustomTableCell
												{...{
													row,
													name: "carbs",
													onChange,
												}}
											/>

											<TableCell
												className={
													classes.selectTableCell
												}
											>
												{row.isEditMode ? (
													<>
														<IconButton
															aria-label="done"
															onClick={() =>
																onToggleEditMode(
																	row.id
																)
															}
														>
															<DoneIcon />
														</IconButton>
														<IconButton
															aria-label="revert"
															onClick={() =>
																onRevert(row.id)
															}
														>
															<RevertIcon />
														</IconButton>
													</>
												) : (
													<>
														<IconButton
															aria-label="delete"
															onClick={() =>
																onToggleEditMode(
																	row.id
																)
															}
														>
															<EditIcon />
														</IconButton>
														<IconButton
															aria-label="delete"
															onClick={() =>
																handleClickDetail()
															}
														>
															<VisibilityIcon />
														</IconButton>
														<IconButton
															aria-label="delete"
															onClick={() =>
																handleClickDelete()
															}
														>
															<DeleteIcon />
														</IconButton>
													</>
												)}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					</PerfectScrollbar>
				</CardContent>
			</Card>
		</Layout>
	);
}
