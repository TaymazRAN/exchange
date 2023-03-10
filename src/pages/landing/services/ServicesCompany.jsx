import * as React from "react";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ServicesCompany() {
	const navigate = useNavigate();

	return (
		<div className="cardBox">
			<h2> خدمات شرکتی </h2>

			<div className="cards">
				<div className="card serviceC">
					<h3 className="title one">عرضه و پذیرش شرکت ها</h3>
					<p className="description">
						تأمین مالی به فرآیند تأمین سرمایه موردنیاز برای فعالیت‌های کسب‌وکار،
						خرید تجهیزات و سرمایه‌گذاری گفته می‌شود.
					</p>
					<Button
						className="button"
						variant="text"
						color="error"
						onClick={(event) => navigate("/static/paziresh")}
					>
						مطالب بیشتر
						<KeyboardArrowLeftRoundedIcon className="icon" />
					</Button>
				</div>

				<div className="card serviceC">
					<h3 className="title two">صندوق سرمایه گذاری</h3>
					<p className="description">
						یکی از راه‌های جذب سرمایه جدید برای کسب و کارها پذیرش و ورود آنها به
						بازار بورس اوراق بهادار یا فرابورس است
					</p>
					<a href="https://sjb.co.ir/sandogh" rel="noreferrer" target="_blank">
						<Button className="button" variant="text" color="error">
							مطالب بیشتر
							<KeyboardArrowLeftRoundedIcon className="icon" />
						</Button>
					</a>
				</div>

				<div className="card serviceC">
					<h3 className="title three">تامین مالی</h3>
					<p className="description">
						مشاوره‌سرمایه گذاری در خصوص یافتن ابزار های جدید اهمیت فراوانی دارد
						تا نقدینگی به سمت مناسبی سوق پیدا کند.
					</p>
					<a
						href="https://sjb.co.ir/taminmali"
						rel="noreferrer"
						target="_blank"
					>
						<Button className="button" variant="text" color="error">
							مطالب بیشتر
							<KeyboardArrowLeftRoundedIcon className="icon" />
						</Button>
					</a>
				</div>
			</div>
		</div>
	);
}
