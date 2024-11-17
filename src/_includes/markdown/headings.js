export default (markdownLib) => {
	const getFontClassByTag = tag => {
		switch (tag) {
			case 'h1': return 'text-3xl'
			case 'h2': return 'text-2xl'
			case 'h3': return 'text-xl'
			case 'h4': return 'text-2xl'
			case 'h5': return 'text-2xl'
			case 'h6': return 'text-2xl'
			case 'h7': return 'text-2xl font-green-500'
		}
	};

	markdownLib.renderer.rules.heading_open = (tokens, idx) => {
		const token = tokens[idx];
		const level = token.tag; // h1, h2, h3, etc.
		const fontClass = getFontClassByTag(level)

		return `<${level} class="${fontClass} font-semibold mt-12 mb-8 text-gray-700 dark:text-gray-400">`;
	};

	markdownLib.renderer.rules.heading_close = (tokens, idx) => {
		return `</${tokens[idx].tag}>`;
	};
};
