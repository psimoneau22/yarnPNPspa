import React from "react";
import Body from "./Body";
import Header from "./Header";

export default function AppLayout({children, ...props}) {
	return (
		<div>
			<Header />
			<Body>
				<children />
			</Body>
		</div>
	)
}