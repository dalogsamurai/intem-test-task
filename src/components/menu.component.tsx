import { Link } from "react-router-dom";
import { menuItems } from "../constants";

const Menu = () => {
	return (
		<div
			style={{
				padding: "20px",
				display: "flex",
				flexDirection: "column",
				gap: "10px",
				borderRight: "1px solid black",
			}}
		>
			{menuItems.map((item) => (
				<Link to={`/${item}`}>
					<div style={{ fontSize: "20px" }}>{item}</div>
				</Link>
			))}
		</div>
	);
};

export default Menu;
