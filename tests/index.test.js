import * as React from 'react';
import { render } from './test-utils';
import { axe } from 'jest-axe';

import { SkipNavLink, SkipNavContent } from '../src/index';

describe('<SkipNavLink />', () => {
	const Layout = ({ id }) => {
		return (
			<div>
				<SkipNavLink contentId={id}>Skip Nav</SkipNavLink>
				<div>
					<header>
						<ul>
							<li>
								<a href="/location">Location</a>
							</li>
							<li>
								<a href="/about">About</a>
							</li>
						</ul>
					</header>
					<SkipNavContent id={id} data-testid="content" />
					<main data-testid="main">
						<h1>This is the main content</h1>
						<button onClick={jest.fn}>Focus trigger</button>
					</main>
				</div>
			</div>
		);
	};

	it('should not have ARIA violations', async () => {
		let { container } = render(<Layout />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('should render proper HTML', () => {
		const { getByText, getByTestId } = render(<Layout />);
		const trigger = getByText(/skip nav/i);
		const target = getByTestId('content');

		const contentId = 'react-lit-skip-nav';
		expect(trigger.tagName).toBe('A');
		expect(trigger.href).toBe(`http://localhost/#${contentId}`);
		expect(target.id).toBe(contentId);
	});

	it('should render proper HTML with a custom ID', () => {
		const contentId = 'custom-id';
		const { getByText, getByTestId } = render(<Layout id={contentId} />);
		const trigger = getByText(/skip nav/i);
		const target = getByTestId('content');

		expect(trigger.tagName).toBe('A');
		expect(trigger.href).toBe(`http://localhost/#${contentId}`);
		expect(target.id).toBe(contentId);
	});
});
