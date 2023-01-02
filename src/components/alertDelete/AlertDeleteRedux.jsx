import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./alert.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Button from "@mui/material/Button";
import LoadingSmall from "../loadingSmall/LoadingSmall";

export default function AlertDeleteRedux(props) {
	const submit = () => {
		confirmAlert({
			title: `پاک کردن ${props.title}`,
			message: `آیا از پاک کردن این ${props.title} مطمئن هستید؟`,
			overlayClassName: "deleteTestClass",
			buttons: [
				{
					label: "بله",
					onClick: props.clickFunction,
				},
				{
					label: "خیر",
				},
			],
		});
	};

	return (
		<>
			<Button
				className="gridButton"
				// onClick={confirmDelete}
				color="error"
				onClick={submit}
			>
				{props.loading ? null : <DeleteOutlineIcon className="gridIcon" />}
				حذف
				{props.loading ? <LoadingSmall /> : null}
			</Button>
		</>
	);
}
