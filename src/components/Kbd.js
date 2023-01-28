import React from 'react';

export default function Kbd({children, special}) {
	return (
		<kbd class={special} >
			{children}
		</kbd>
	);
}