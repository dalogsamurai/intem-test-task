import { Link } from "react-router-dom";
import { menuItems } from "../constants";

const Menu = () => {
	return (
		<div className="menu">
			{menuItems.map((item) => (
				<Link to={`/${item}`}>
					<div className="menu__point">{item}</div>
				</Link>
			))}
		</div>
	);
};

export default Menu;
