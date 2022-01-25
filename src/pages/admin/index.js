import React from 'react';
import {render} from 'react-dom';
import AppLayout from '../../layout/AppLayout';

import './admin.html';

export default function Section1Page1() {
	return (
		<AppLayout>
			<div>
				Section1Page1 sasdf
			</div>
		</AppLayout>
	)
}

render(<Page1 />, document.getElementById('#appRoot'))