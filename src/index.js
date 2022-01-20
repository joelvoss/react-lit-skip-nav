import * as React from 'react';

const DEFAULT_ID = 'react-lit-skip-nav';

/**
 * SkipNavLink renders a link that remains hidden until focused to skip to the
 * main content.
 */
export const SkipNavLink = React.forwardRef(
	(
		{ as: Comp = 'a', children = 'Skip to content', contentId, ...props },
		forwardedRef,
	) => {
		let id = contentId || DEFAULT_ID;
		return (
			<Comp {...props} ref={forwardedRef} href={`#${id}`}>
				{children}
			</Comp>
		);
	},
);

////////////////////////////////////////////////////////////////////////////////

/**
 * SkipNavContent renders a div as the target for the link.
 */
export const SkipNavContent = React.forwardRef(
	({ as: Comp = 'div', id: idProp, ...props }, parentRef) => {
		let id = idProp || DEFAULT_ID;
		return <Comp {...props} ref={parentRef} id={id} />;
	},
);
