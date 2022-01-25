import React from 'react';
import {render} from 'react-dom';
import AppLayout from '../../layout/AppLayout';

export default function Page2() {
	return (
		<AppLayout>
			<div>
				Page2
			</div>
		</AppLayout>
	)
}

render(<Page2 />, document.getElementById('appRoot'))