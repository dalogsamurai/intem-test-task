import iLoading from "../../assets/loading.svg";
import "./loader.component.css";

interface Props {
	isLoading: boolean;
}

const LoaderPlaceholder = ({ isLoading }: Props) => {
	return isLoading ? (
		<div className="loader">
			<img src={iLoading} className="loader__img" alt="" />
		</div>
	) : null;
};

export default LoaderPlaceholder;
