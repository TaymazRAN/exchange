import React, { useRef, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import { FormControl } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import { fixNull } from "../../../../services/fixNull";
import LoadingRedux from "../../../../component/loadingRedux/LoadingRedux";
import LoadingSmall from "../../../../component/loadingSmall/LoadingSmall";
import SnackAlert from "../../../../component/snackAlert/SnackAlert";
import { fetchFunctions } from "../../../../features/package/functionSlice";
import {
	fetchStorePackages,
	storePackageActions,
	updateStorePackage,
	uploadBackgroundStorePackage,
	uploadIconStorePackage,
} from "../../../../features/package/storePackageSlice";
import { fetchCategorys } from "../../../../features/package/categorySlice";

const validationSchema = yup.object().shape({
	name: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("نام بسته را وارد کنید"),
	description: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("توضیحات را وارد کنید"),
	isExcersise: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("نوع اجرا را انتخاب کنید"),
	packageDiscountValue: yup
		.number()
		.typeError("تخفیف باید عدد باشد")
		.required("تخفیف را وارد کنید"),
	type: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("نوع بسته را انتخاب کنید"),
	categoryId: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("دسته بندی را انتخاب کنید"),
	functions: yup
		.array()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("عملکرد ها را انتخاب کنید"),
});

export default function TypeEdit(props) {
	const { id } = useParams();

	const navigate = useNavigate();
	const formRef = useRef();
	const dispatch = useDispatch();

	const data = useSelector((state) => state.storePackage.data);
	const dataCategory = useSelector((state) => state.category.data);
	const dataFunction = useSelector((state) => state.function.data);
	const [post, setPost] = useState(undefined);
	const handleLoading = useSelector(
		(state) => state.storePackage.handleLoading
	);
	const ready = useSelector((state) => state.storePackage.ready);
	const error = useSelector((state) => state.storePackage.error);
	const handleError = useSelector((state) => state.storePackage.handleError);

	const [successAlert, setSuccessAlert] = useState(false);
	const [successText, setSuccessText] = useState("");
	const handleOpenSuccess = (text) => {
		setSuccessText(text);
		setSuccessAlert(true);
	};

	const handleCloseSuccess = () => {
		setSuccessAlert(false);
	};

	const [errorAlert, setErrorAlert] = useState(false);
	const [errorText, setErrorText] = useState("");

	const handleOpenError = (text) => {
		setErrorText(text);
		setErrorAlert(true);
	};

	const handleCloseError = () => {
		setErrorAlert(false);
	};

	useEffect(() => {
		dispatch(fetchFunctions());
		dispatch(fetchCategorys());
		dispatch(fetchStorePackages());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (data.find((item) => item.id === id)) {
			setPost(data.find((item) => item.id === id));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ready]);

	useEffect(() => {
		if (handleError === "success") {
			handleOpenSuccess("عملیات با موفقیت انجام شد");
			setTimeout(() => {
				navigate(`/admin/storePackage`);
				dispatch(storePackageActions.clearHandleError());
			}, 1500);
		} else if (handleError === "uploaded") {
			handleOpenSuccess("تصویر با موفقیت آپلود شد");
			dispatch(storePackageActions.clearHandleError());
		} else if (
			handleError !== "success" &&
			handleError !== "" &&
			handleError !== "uploaded"
		) {
			handleOpenError("عملیات با مشکل مواجه شد");
			dispatch(storePackageActions.clearHandleError());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleError]);

	const handleSubmit = () => {
		if (formRef.current) {
			formRef.current.handleSubmit();
		}
	};

	const initialValues = {
		name: fixNull(post?.name),
		description: fixNull(post?.description),
		isExcersise: fixNull(post?.isExcersise, false),
		packageDiscountValue: fixNull(post?.packageDiscountValue, 0),
		type: fixNull(post?.type),
		categoryId: fixNull(post?.categoryId),
		functions: fixNull(post?.functions, []),
	};

	const submit = (data) => {
		dispatch(updateStorePackage({ id, data })).unwrap();
	};

	const handleIconUpload = async (event) => {
		var data = new FormData();
		var file = event.target.files[0];
		if (
			file.type === "image/jpeg" ||
			file.type === "image/jpg" ||
			file.type === "image/png"
		) {
			data.append("formFile", file);
			dispatch(uploadIconStorePackage({ id, data }));
		} else {
			handleOpenError("فرمت تصویر باید jpg, jpeg یا png باشد");
		}
	};

	const handleBackgroundUpload = async (event) => {
		var data = new FormData();
		var file = event.target.files[0];
		if (
			file.type === "image/jpeg" ||
			file.type === "image/jpg" ||
			file.type === "image/png"
		) {
			data.append("formFile", file);
			dispatch(uploadBackgroundStorePackage({ id, data }));
		} else {
			handleOpenError("فرمت تصویر باید jpg, jpeg یا png باشد");
		}
	};

	return (
		<>
			<SnackAlert
				props={{
					successAlert,
					handleCloseSuccess,
					successText,
					errorAlert,
					handleCloseError,
					errorText,
				}}
			/>

			{error !== "" || Object.keys(post ? post : {}).length === 0 || !ready ? (
				<LoadingRedux error={error} />
			) : (
				<Formik
					{...props}
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={submit}
					innerRef={formRef}
				>
					{({ handleChange, values, setFieldValue, errors, touched }) => (
						<Form>
							<div className="mainPanelTitle bold">
								ویرایش بسته
								<Button
									variant="outlined"
									component="label"
									margin="dense"
									color="info"
									id="logoFileName"
									sx={{ marginLeft: "15px" }}
									onChange={handleIconUpload}
								>
									آپلود تصویر
									{handleLoading ? <LoadingSmall /> : null}
									<input type="file" hidden />
								</Button>
								<Button
									variant="outlined"
									component="label"
									margin="dense"
									color="info"
									id="logoFileName"
									sx={{ marginLeft: "15px" }}
									onChange={handleBackgroundUpload}
								>
									آپلود تصویر زمینه
									{handleLoading ? <LoadingSmall /> : null}
									<input type="file" hidden />
								</Button>
							</div>
							<div className="profileInputContainer">
								<TextField
									autoFocus
									dir="rtl"
									margin="dense"
									id="name"
									label="نام بسته"
									type="text"
									fullWidth
									variant="outlined"
									className="profileInput"
									value={values.name}
									onChange={handleChange}
									error={touched.name && Boolean(errors.name)}
									helperText={touched.name && errors.name}
								/>
								<FormControl margin="dense" fullWidth className="profileInput">
									<InputLabel error={touched.type && Boolean(errors.type)}>
										نوع بسته
									</InputLabel>
									<Select
										labelId="type"
										id="type"
										variant="outlined"
										value={values.type}
										defaultValue={post?.type}
										onChange={(e) => {
											setFieldValue("type", e.target.value);
										}}
										error={touched.type && Boolean(errors.type)}
										fullWidth
										label="نوع بسته"
									>
										<MenuItem value="" sx={{ justifyContent: "flex-end" }}>
											<em>انتخاب کنید</em>
										</MenuItem>
										<MenuItem
											value={"Disorder"}
											sx={{ justifyContent: "flex-end" }}
										>
											ناهنجاری
										</MenuItem>
										<MenuItem
											value={"Measurment"}
											sx={{ justifyContent: "flex-end" }}
										>
											ارزیابی
										</MenuItem>
									</Select>
									<FormHelperText error={touched.type && Boolean(errors.type)}>
										{touched.type && errors.type}
									</FormHelperText>
								</FormControl>
							</div>
							<div className="profileInputContainer">
								<TextField
									autoFocus
									dir="rtl"
									margin="dense"
									id="description"
									label="توضیحات"
									multiline
									maxRows={4}
									minRows={2}
									type="text"
									fullWidth
									variant="outlined"
									className="profileInput"
									value={values.description}
									onChange={handleChange}
									error={touched.description && Boolean(errors.description)}
									helperText={touched.description && errors.description}
								/>
							</div>
							<div className="profileInputContainer">
								<FormControl margin="dense" fullWidth className="profileInput">
									<InputLabel
										error={touched.isExcersise && Boolean(errors.isExcersise)}
									>
										نوع اجرا
									</InputLabel>
									<Select
										labelId="isExcersise"
										id="isExcersise"
										variant="outlined"
										value={values.isExcersise}
										defaultValue={post?.isExcersise}
										onChange={(e) => {
											setFieldValue("isExcersise", e.target.value);
										}}
										error={touched.isExcersise && Boolean(errors.isExcersise)}
										fullWidth
										label="نوع اجرا"
									>
										<MenuItem value="" sx={{ justifyContent: "flex-end" }}>
											<em>انتخاب کنید</em>
										</MenuItem>
										<MenuItem value={false} sx={{ justifyContent: "flex-end" }}>
											آزمون
										</MenuItem>
										<MenuItem value={true} sx={{ justifyContent: "flex-end" }}>
											تمرین
										</MenuItem>
									</Select>
									<FormHelperText
										error={touched.isExcersise && Boolean(errors.isExcersise)}
									>
										{touched.isExcersise && errors.isExcersise}
									</FormHelperText>
								</FormControl>
								<Autocomplete
									fullWidth
									id="categoryId"
									name="categoryId"
									className="profileInput"
									options={dataCategory.map((item) => {
										return { ...item, label: item.name };
									})}
									defaultValue={
										dataCategory.find((item) => item.id === post?.categoryId)
											?.name
									}
									// getOptionLabel={(option) => option.name}
									onChange={(e, value) => {
										setFieldValue(
											"categoryId",
											value !== null ? value.id : initialValues.categoryId
										);
									}}
									renderInput={(params) => (
										<TextField
											margin="normal"
											label="دسته بندی"
											fullWidth
											name="categoryId"
											value={values.categoryId}
											error={touched.categoryId && Boolean(errors.categoryId)}
											helperText={touched.categoryId && errors.categoryId}
											{...params}
										/>
									)}
								/>
							</div>
							<div className="profileInputContainer">
								<TextField
									autoFocus
									dir="rtl"
									margin="dense"
									id="packageDiscountValue"
									label="تخفیف"
									type="number"
									fullWidth
									variant="outlined"
									className="profileInput"
									value={values.packageDiscountValue}
									onChange={handleChange}
									error={
										touched.packageDiscountValue &&
										Boolean(errors.packageDiscountValue)
									}
									helperText={
										touched.packageDiscountValue && errors.packageDiscountValue
									}
								/>
							</div>
							<div className="profileInputContainer">
								<Autocomplete
									multiple
									fullWidth
									id="functions"
									name="functions"
									className="profileInput"
									options={dataFunction.map((item) => {
										return { ...item, label: item.name };
									})}
									defaultValue={post?.functions?.map((item) => {
										return {
											...dataFunction.find((itemFunc) => itemFunc.id === item),
											label: dataFunction.find(
												(itemFunc) => itemFunc.id === item
											)?.name,
										};
									})}
									// getOptionLabel={(option) => option.name}
									onChange={(e, value) => {
										setFieldValue(
											"functions",
											value !== null
												? value.map((item, i) => {
														return item.id;
												  })
												: initialValues.functions
										);
									}}
									renderInput={(params) => (
										<TextField
											margin="normal"
											label="عملکرد ها"
											fullWidth
											name="functions"
											value={values.functions}
											error={touched.functions && Boolean(errors.functions)}
											helperText={touched.functions && errors.functions}
											{...params}
										/>
									)}
								/>
							</div>
							<div className="profileInputContainer">
								<Button
									variant="outlined"
									className="profileInput"
									component="label"
									margin="dense"
									color="error"
									onClick={(event) => navigate("/admin/storePackage")}
									id="logoFileName"
									sx={{ padding: "15px 0", marginTop: "4px" }}
									fullWidth
								>
									انصراف
								</Button>
								<Button
									variant="outlined"
									className="profileInput"
									component="label"
									margin="dense"
									id="logoFileName"
									color="primary"
									sx={{ padding: "15px 0", marginTop: "4px" }}
									onClick={(event) => handleSubmit()}
									fullWidth
								>
									ویرایش
									{handleLoading ? <LoadingSmall /> : null}
								</Button>
							</div>
						</Form>
					)}
				</Formik>
			)}
		</>
	);
}
