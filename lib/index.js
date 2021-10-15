const screen = [320, 480, 768, 1024, 1200];

export default function mediaQuery(data) {
	// Check parameter max or min
	let type;
	switch (data) {
		case 'max':
			type = 'max';
			break;
		case 'min':
			type = 'min';
			break;
		default:
			type = 'max';
	}

	return screen.map((scrn) => `@media (${type}-width: ${scrn}px)`);
}
