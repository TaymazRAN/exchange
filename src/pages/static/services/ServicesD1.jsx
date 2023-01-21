import React from "react";
import Divider from "../../../components/divider/Divider";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
	{ field: "id", headerName: "ردیف", flex: 1 },
	{ field: "name", headerName: "نام شرکت", flex: 2 },
];

const rows1 = [
	{ id: 1, name: "شرکت ملی نفت ایران" },
	{ id: 2, name: "شرکت ملی پخش فرآورده‌های نفتی ایران" },
	{ id: 3, name: "شرکت پالایش نفت آبادان" },
	{ id: 4, name: "شرکت پالایش نفت اصفهان" },
	{ id: 5, name: "شرکت پالایش نفت بندر عباس" },
	{ id: 6, name: "شرکت پالایش نفت بهران" },
	{ id: 7, name: "شرکت پالایش نفت تبریز" },
	{ id: 8, name: "شرکت پالایش نفت تهران" },
	{ id: 9, name: "شرکت پالایش نفت امام خمینی(ره) شازند" },
	{ id: 10, name: "شرکت پالایش نفت شیراز" },
	{ id: 11, name: "شرکت پالایش گاز ایلام" },
	{ id: 12, name: "شرکت پالایش گاز خانگیران" },
	{ id: 13, name: "شرکت پالایش نفت کرمانشاه" },
	{ id: 14, name: "شرکت پالایش نفت لاوان" },
	{ id: 15, name: "مجتمع گازی پارس جنوبی" },
];

const rows2 = [
	{ id: 16, name: "شرکت پتروشیمی بندر امام خمینی" },
	{ id: 17, name: "شرکت پتروشیمی جم" },
	{ id: 18, name: "شرکت پتروشیمی رازی" },
	{ id: 19, name: "شرکت پتروشیمی زاگرس" },
	{ id: 20, name: "شرکت پتروشیمی فن‌آوران" },
	{ id: 21, name: "شرکت پتروشیمی کرمانشاه" },
	{ id: 22, name: "شرکت پتروشیمی مبین" },
	{ id: 23, name: "شرکت ذوب آهن اصفهان" },
	{ id: 24, name: "شرکت زغال سنگ البرز مرکزی" },
	{ id: 25, name: "شرکت زغال سنگ کرمان" },
	{ id: 26, name: "واحد کک‌سازی و پالایش قطران زرند" },
	{ id: 27, name: "شرکت پروده طبس" },
	{ id: 28, name: "شرکت پتروشیمی تبریز" },
	{ id: 29, name: "شرکت پتروشیمی شازند" },
	{ id: 30, name: "شرکت پتروشیمی مبین" },
];

const rows3 = [
	{ id: 1, name: "نیروگاه سیکل ترکیبی فارس، شرکت مولد نیروگاهی تجارت فارس" },
	{ id: 2, name: "نیروگاه پرند، تولید برق پرند مپنا" },
	{ id: 3, name: "نیروگاه زنبق یزد، تعاونی کارکنان نیروگاه یزد" },
	{ id: 4, name: "نیروگاه سیکل ترکیبی ارومیه، تدبیرسازان سرآمد" },
	{ id: 5, name: "نیروگاه سیکل ترکیبی سبلان، سبلان برق امید" },
	{ id: 6, name: "نیروگاه سیکل ترکیبی شریعتی، اندیشه‌سازان بهین سرآمد" },
	{ id: 7, name: "نیروگاه سیکل ترکیبی نیشابور، ساینا گستر پردیسان" },
	{ id: 8, name: "نیروگاه سیکل سنندج، شرکت تولید نیروی برق سنندج" },
	{
		id: 9,
		name: "نیروگاه سیکل ترکیبی منتظر قائم، شرکت توسعه برق و انرژی سپهر",
	},
	{ id: 10, name: "نیروگاه شهید منتظر قائم، شرکت توسعه برق و انرژی سپهر" },
	{ id: 11, name: "نیروگاه سیکل ترکیبی خوی، تولید نیروی پرتو شمس تابان" },
];

const rows4 = [
	{ id: 12, name: "نیروگاه سیکل‌ ترکیبی گیلان، توسعه مسیر برق گیلان" },
	{ id: 13, name: "نیروگاه سیکل‌ ترکیبی‌ قم، پیوند گستر پارس " },
	{
		id: 14,
		name: "نیروگاه شهدای پاکدشت (دماوند)، شرکت تولید نیروی برق دماوند",
	},
	{ id: 15, name: "نیروگاه شهید منتظری، پرشین فولاد" },
	{ id: 16, name: "نیروگاه کازرون، شرکت ساینا گستر پردیسان" },
	{ id: 17, name: "نیروگاه کهنوج، شرکت تولید برق ماهتاب کهنوج" },
	{ id: 18, name: "نیروگاه مشهد، افق توسعه انرژی خلیج فارس" },
	{ id: 19, name: "نیروگاه سیکل ترکیبی سمنان (قدس)، گهر انرژی سیرجان" },
	{ id: 20, name: "نیروگاه کاشان، شرکت ساخت و بهره برداری انرژی" },
	{ id: 21, name: "نیروگاه آبادان، تولید نیروی برق آبادان" },
	{ id: 22, name: "نیروگاه سلطانیه، شرکت تولید نیروی مرکزی صبا" },
];

const ServicesD1 = () => {
	return (
		<div className="page">
			<div className="fullImage energy2"></div>
			<h2 className="fullWidth">معرفی بورس انرژی ایران</h2>
			<p>
				شرکت بورس انرژی ایران با هدف ساماندهی، پذیرش، نظارت و تسهیل انجام
				معاملات حامل‏‌های انرژی و اوراق بهادار مبتنی بر حامل‌‏های انرژی، فراهم
				آوردن دسترسی غیر تبعیض‌آمیز و منصفانه اعضاء به بسترهای معاملاتی، همکاری
				و هماهنگی با نهادهای مالی، شرکت‌ها، سازمان‌ها و نهادهای متولی بازارهای
				انرژی از جمله وزارتخانه‎‌‌های نفت، نیرو و صنعت‌ومعدن و تجارت و شرکت‌های
				ملی نفت ایران، ملی پالایش و پخش فرآورده‌های نفتی ایران، ملی صنایع
				پتروشیمی، توانیر، مدیریت شبکه برق ایران، مدیریت منابع آب ایران و سازمان
				حفاظت محیط زیست و همچنین انجام سایر وظایف محوله در اساسنامه شرکت، در
				۱۳۹۱/۰۴/۱۷ با مجوز شورای عالی بورس و اوراق بهادار به عنوان چهارمین بورس
				رسمی کشور به صورت شرکت سهامی‌عام تاسیس شده و تحت نظارت سازمان بورس و
				اوراق بهادار فعالیت می‌‏نماید.<br></br>
				<br></br>
				بر اساس مجوز صادره توسط شورای عالی بورس در خصوص تأسیس بورس انرژی، ترکیب
				سهامداری این شرکت به میزان 60 درصد نهادهای مالی، 20 درصد فعالان صنعت برق
				و نفت و 20 درصد عموم مردم و با قید محدودیت 5/2 درصد برای هر متقاضی از
				طرف سازمان بورس و اوراق بهادار تعیین گردید. سرمایه اولیه شرکت 200
				میلیارد ریال در نظر گرفته شد و شرکت در تاریخ 19 اسفند سال 91 به طور رسمی
				معاملات خود را با انجام معاملات برق، قطران و زغال‎سنگ آغاز نمود. بورس
				انرژی ایران، به عنوان یک بورس کالایی، تشکلی خودانتظام است که امکان انجام
				معاملات حامل‏‌های انرژی (شامل نفت، گاز، برق و سایر حامل‌های انرژی) و
				اوراق بهادار مبتنی بر کالاهای مذکور در آن وجود دارد. در بورس انرژی ایران
				نیز مشابه سایر بورس‏‌ها، تعداد زیادی خریدار و فروشنده حضور داشته که با
				انجام داد و ستد در فضایی رقابتی، دستیابی به قیمت‌های تعادلی حامل‏‌های
				انرژی را میسّر می‏‌سازند..<br></br>
				<br></br>
				بورس انرژی ایران دارای سه بازار فیزیکی، مشتقه و فرعی می‏‌باشد. در بازار
				فیزیکی، کالاهای پذیرفته شده در بورس و در بازار مشتقه، اوراق بهادار مبتنی
				بر کالاهای پذیرفته شده در بورس مورد معامله قرار می‏‌گیرند. کالاهای تک
				محمول‌ه‏ای و خارج از گونه نیز در بازار فرعی قابلیت معامله دارند. بازار
				فیزیکی خود شامل سه تابلوی برق، نفت و گاز و تابلوی سایر حامل‌های انرژی و
				بازار مشتقه شامل سه تابلوی قرارداد سلف موازی استاندارد، قرارداد آتی و
				قرارداد اختیار معامله می‏‌باشد. همچنین هر یک از تابلوها دارای دو رینگ
				داخلی و بین‏‌المللی هستند. در بازار فیزیکی معاملات در قالب قراردادهای
				نقدی، نسیه، سلف، کشف پریمیوم انجام می‌پذیرند و قراردادهای آتی، اختیار
				معامله و سلف موازی استاندارد و ... نیز قابلیت معامله در بازار مشتقه را
				دارا می‌باشند..<br></br>
				<br></br>
				بر این اساس کلیه حامل‌‏های انرژی در صورت داشتن سابقه فعالیت قابل اتکاء
				عرضه‌‏کننده در بازار کالای مورد پذیرش، امکان کشف عادلانه قیمت با توجه به
				میزان عرضه کالا توسط متقاضی و عدم شمول محدودیت‌‏های قیمت‌‏گذاری قانونی و
				انحصار در عرضه یا تقاضا همچنین ارائه تعهدات مصرح در دستورالعمل پذیرش
				توسط متقاضی با تصویب هیات پذیرش یا کمیته عرضه بورس انرژی به عنوان کالای
				اصلی یا مشابه امکان معامله در بورس انرژی را دارند. در بورس انرژی ایران
				معاملات در بازار فیزیکی بسته به تعداد عرضه‌‏کنندگان در یک نماد معاملاتی
				و شرایط عرضه به سه روش حراج حضوری، معاملات تمام الکترونیکی و عرضه یک‌جا
				انجام می‌‏پذیرد. معاملات در بازار مشتقه نیز به صورت تمام الکترونیکی
				انجام می‏‌پذیرد.
			</p>
			<div className="fullImage energy1"></div>
			<h2 className="small fullWidth">ارکان شرکت بورس انرژی ایران</h2>
			<div className="hollowContainer">
				<div className="hollow">۱. مجامع عمومی</div>
				<div className="hollow">۲. هیئت مدیره</div>
				<div className="hollow">۳. مدیر عامل</div>
				<div className="hollow">۴. بازرس / حسابرس</div>
			</div>
			<h2 className="small fullWidth">منابع بورس انرژی ایران</h2>
			<p>
				<ul>
					<li>
						سامانه معاملاتی تمام الکترونیکی ویژه معاملات بازار فیزیکی و مشتقه
					</li>
					<li>
						سامانه تمام الکترونیکی ثبت و سپرده‌گذاری و تسویه و پایاپای معاملات
					</li>
					<li>
						بیش از 40 شرکت کارگزاری دارای مجوز فعالیت در بورس انرژی که اغلب
						آن‎ها دارای رتبه الف و ب می‌باشند.
					</li>
					<li>
						پذیرش بیش از 100 کالا- عرضه‌‎کننده و قرارداد شامل کالاهای بیش از 20
						پالایشگاه نفت‌وگاز، بیش از 20 نیروگاه تولید برق، بیش از 10 مجتمع
						پتروشیمی و چندین شرکت کک‌سازی و پالایش قطران
					</li>
				</ul>
			</p>
			<h2 className="fullWidth">مزایای پذیرش و معامله در بورس انرژی ایران</h2>
			<h2 className="small fullWidth">معافیت مالیاتی:</h2>
			<p>
				بر اساس ماده 6 قانون توسعه ابزارهای نوین مالی، 10 درصد از مالیات بر
				در‎آمد حاصل از فروش کالاهایی که در بورس‌های کالایی پذیرفته شده و به فروش
				می‌‎رسد از بخشودگی مالیاتی برخوردارند.
			</p>
			<h2 className="small fullWidth">معافیت از تشریفات مزایده و مناقصه:</h2>
			<p>
				بر اساس ماده 17 قانون توسعه ابزار‎های مالیاتی جدید و بندهای قوانین بودجه
				سنواتی خرید و فروش کالاهای پذیرفته شده در بورس‌های کالایی که با رعایت
				مقررات حاکم بر این بورس‌ها مورد دادوستد قرار می‌‎گیرند توسط وزارتخانه‌ها
				و دستگاه‌های دولتی و عمومی و اجرایی نیاز به برگزاری مناقصه یا مزایده و
				تشریفات مربوط به آنها ندارد.
				<ul>
					<li>
						امکان بازاریابی و عرضه محصولات در رینگ داخلی و بین‎‌الملل از طریق
						شبکه کارگزاران عضو و سامانه‌های معاملاتی بورس انرژی
					</li>
					<li>
						امکان تأمین کالاهای مورد نیاز از طریق سازوکار شفاف و منصفانه بورس
						انرژی
					</li>
					<li>
						امکان تأمین مالی و پوشش ریسک عرضه‎‌کنندگان از طریق ابزارهای مالی
						موجود در بورس انرژی
					</li>
					<li>
						امکان پوشش ریسک و تأمین کالاهای مورد نیاز مصرف‎‌کنندگان برای
						دوره‌های زمانی مختلف
					</li>
					<li>
						کاهش هزینه‎‌های معاملاتی برای مشتریان در مقایسه با معامله در خارج از
						بورس (شامل هزینه‌های عقد قرارداد، بازاریابی و ...)
					</li>
					<li>
						کاهش ریسک‎‌های معاملاتی از جمله ریسک عدم ایفای تعهدات طرفین و ...
					</li>
					<li>
						وجود قراردادهای استاندارد و مشخص همچنین تضمین استاندارد بودن و کیفیت
						کالاهای مورد معامله در بورس
					</li>
					<li>
						برخورداری از چارچوب مقرراتی جامع در حوزه پذیرش، معاملات، ثبت و
						سپرده‎‌گذاری و تسویه پایاپای کالاها و اوراق بهادار مبتنی بر کالا
					</li>
				</ul>
			</p>
			<Divider centered />
			<h2>عرضه‌کنندگان عمده در بورس انرژی ایران</h2>
			<h2 className="small">حوزه نفت، گاز، پتروشیمی و سایر حامل‌های انرژی</h2>
			<div className="page row">
				<div className="split">
					<div className="dataGridContainer">
						<DataGrid className="dataGrid" rows={rows1} columns={columns} />
					</div>
				</div>
				<div className="split">
					<div className="dataGridContainer">
						<DataGrid className="dataGrid" rows={rows2} columns={columns} />
					</div>
				</div>
			</div>
			<h2 className="small">حوزه برق</h2>
			<div className="page row">
				<div className="split">
					<div className="dataGridContainer small">
						<DataGrid className="dataGrid" rows={rows3} columns={columns} />
					</div>
				</div>
				<div className="split">
					<div className="dataGridContainer small">
						<DataGrid className="dataGrid" rows={rows4} columns={columns} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServicesD1;
