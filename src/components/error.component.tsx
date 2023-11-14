import iError from "../assets/error.svg";

interface Props {
	isError: boolean;
}

const ErrorPlaceHolder = ({ isError }: Props) => {
	return isError ? (
		<div
			style={{
				width: "400px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<img src={iError} style={{ width: "50px", height: "50px" }} alt="" />
			<div>Something went wrong</div>
		</div>
	) : null;
};

export default ErrorPlaceHolder;
