import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SuperMenu from "../superMenu/SuperMenu";
import { useNavigate } from "react-router-dom";

export default function Header() {
	const navigate = useNavigate();

	return (
		<div className="header">
			<div className="widthFix">
				<Link to="/" className="logoBox">
					<div className="logo"></div>
					<span className="name">
						کارگزاری <span className="yellow">صبا جهاد</span>
					</span>
				</Link>
				<div className="buttonBox">
					<SuperMenu />
				</div>

				<div className="buttonBox">
					<Button
						className="button contained kalameh b"
						variant="text"
						color="warning"
						onClick={(event) => navigate("/login")}
					>
						ورود / ثبت نام
					</Button>
				</div>
			</div>
		</div>
	);
}
