import React from "react";
import Menu from "./Menu";

export default function Header({children}) {
	return (
		<div>
			LayoutHeader
			<Menu />
			<children />
		</div>
	)
}