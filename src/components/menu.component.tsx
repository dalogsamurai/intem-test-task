import { Link } from "react-router-dom";

const Menu = () => {
	const menuPoints = ["point1", "point2", "point3"];

	return (
		<div className="menu">
			{menuPoints.map((point) => (
				<Link to={`/${point}`}>
					<div className="menu__point">{point}</div>
				</Link>
			))}
		</div>
	);
};

export default Menu;
