import React from 'react';
import {render} from 'react-dom';
import AppLayout from '../../layout/AppLayout';

export default function Page3() {
	return (
		<AppLayout>
			<div>
				Page3
			</div>
		</AppLayout>
	)
}

render(<Page2 />, document.getElementById('appRoot'))