import { SkipNavLink, SkipNavContent } from '../../src/index';

export function Example() {
	return (
		<>
			<h2>Example: Basic</h2>
			<SkipNavLink />
			<div>
				<div>
					<p>I'm some presentational content that should be skipped.</p>
					<p>
						Press tab to focus the skip nav link and hit enter.
						<br />
						The next tab should focus the bottom button.
					</p>

					<button>Here to be skipped over.</button>
				</div>

				<SkipNavContent />

				<div>
					<p>I'm the main content!</p>
					<button>Here to be next skipped to.</button>
				</div>
			</div>
		</>
	);
}
