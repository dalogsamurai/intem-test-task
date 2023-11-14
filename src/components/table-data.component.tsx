import { useEffect, useState } from "react";
import { findKeyByValue } from "../utils/findKeybyValue";
import { Controller, useForm } from "react-hook-form";
import { supabase } from "../api/supabase";
import { useParams } from "react-router-dom";
import ErrorPlaceHolder from "./error.component";
import LoaderPlaceholder from "./loader/loader.component";
import useLoading from "../hooks/useLoading";

interface Props {
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	item: any;
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	value: any;
}

const TableData = ({ item, value }: Props) => {
	const [isInput, setInput] = useState(false);
	const [isCheckbox, setCheckbox] = useState(false);
	const [displayValue, setDisplayValue] = useState(value);
	const { isLoading, isError, setError, setLoading } = useLoading();

	const { id } = useParams();
	const { getValues, handleSubmit, control } = useForm();

	const onSubmit = async () => {
		const [formValue] = Object.values(getValues());
		const key = findKeyByValue(item, value);

		setLoading(true);

		const { error } = await supabase
			.from(id!)
			.update({ ...item, [key]: formValue })
			.eq("id", item.id);

		if (error) {
			setError(true);
			return;
		} else {
			setDisplayValue(formValue);
			setInput(false);
			setLoading(false);
		}
	};

	const focusInCurrentTarget = ({ relatedTarget, currentTarget }: any) => {
		if (relatedTarget === null) {
			return false;
		}

		let node = relatedTarget.parentNode;

		while (node !== null) {
			if (node === currentTarget) return true;
			node = node.parentNode;
		}
		return false;
	};

	const onBlur = (e: any) => {
		if (!focusInCurrentTarget(e)) {
			setInput(false);
		}
	};

	useEffect(() => {
		if (typeof value === "boolean") {
			setCheckbox(true);
		}
	}, []);

	return (
		// rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<td
			style={{ width: "200px", cursor: "pointer" }}
			onClick={() => {
				setInput(true);
			}}
			onBlur={onBlur}
		>
			<LoaderPlaceholder isLoading={isLoading} />
			<ErrorPlaceHolder isError={isError} />

			{!(isInput || isLoading || isError) && `${displayValue}`}

			{isInput && !isLoading && (
				<div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Controller
							control={control}
							name={findKeyByValue(item, value)!}
							render={({ field }) => (
								<input
									type={isCheckbox ? "checkbox" : "text"}
									defaultValue={displayValue}
									/* rome-ignore lint/a11y/noAutofocus: <explanation> */
									autoFocus={true}
									{...field}
								/>
							)}
						/>
						<button
							style={{ backgroundColor: "forestgreen", width: "200px" }}
							onBlur={() => setInput(false)}
							type="submit"
						>
							Submit
						</button>
					</form>
				</div>
			)}
		</td>
	);
};

export default TableData;
