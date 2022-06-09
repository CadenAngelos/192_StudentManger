import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../layouts/Layout";
import styles from "../../styles/Signin/Login.module.css";
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
import PerfectScrollbar from "react-perfect-scrollbar";
import EditIcon from "@material-ui/icons/EditOutlined";
import DoneIcon from "@material-ui/icons/DoneAllTwoTone";
import RevertIcon from "@material-ui/icons/NotInterestedOutlined";

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

export default function Home() {
	const [rows, setRows] = React.useState([
		createData("Giải tích 12", "2021-2022", 39, 24, 4.0),
		createData("Vật lý 11", "2021-2022", 41, 37, 4.3),
		createData("Giáo dục công dân 10", "2021-2022", 40, 24, 6.0),
		createData("Hóa học 11", "2021-2022", 41, 37, 4.3),
		createData("Địa lý 10", "2021-2022", 45, 30, 6.0),
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

	return (
		<Layout>
			<Card className="m-4 p-5">
				<CardContent className={classes.content}>
					<PerfectScrollbar>
						<div className={classes.inner}>
							<Table>
								<TableHead>
									<TableRow>
										<TableCell align="left">
											<div className="text-blue-400 text-lg font-semibold ">
												Tên môn học
											</div>{" "}
										</TableCell>
										<TableCell align="left">
											<div className="text-blue-400  text-lg font-semibold">
												Năm học
											</div>{" "}
										</TableCell>
										<TableCell align="left">
											<div className="text-blue-400  text-lg font-semibold">
												Sỉ số
											</div>{" "}
										</TableCell>
										<TableCell align="left">
											<div className="text-blue-400  text-lg font-semibold">
												Giáo viên phụ trách
											</div>{" "}
										</TableCell>
										<TableCell align="left">
											<div className="text-blue-400  text-lg font-semibold">
												Tên môn học
											</div>{" "}
										</TableCell>
										<TableCell align="left" />
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
											<CustomTableCell
												{...{
													row,
													name: "protein",
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
