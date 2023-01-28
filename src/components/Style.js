import React from 'react';

export default function Style({children, ClassName}) {
	return (
		<span class={ClassName} >
			{children}
		</span>
	);
}