export default (markdownLib) => {
	const getFontClassByTag = tag => {
		switch (tag) {
			case 'h1': return 'text-3xl mt-20'
			case 'h2': return 'text-2xl mt-14'
			case 'h3': return 'text-xl mt-14'
			case 'h4': return 'text-2xl mt-14'
			case 'h5': return 'text-2xl mt-14'
			case 'h6': return 'text-2xl mt-14'
			case 'h7': return 'text-2xl font-green-500 mt-14'
		}
	};

	markdownLib.renderer.rules.heading_open = (tokens, idx) => {
		const token = tokens[idx];
		const level = token.tag; // h1, h2, h3, etc.
		const fontClass = getFontClassByTag(level)

		return `<${level} class="${fontClass} font-semibold mb-8 text-gray-700 dark:text-gray-400">`;
	};

	markdownLib.renderer.rules.heading_close = (tokens, idx) => {
		return `<hr class="border-t border-gray-300 dark:border-gray-700 mt-2"></${tokens[idx].tag}>`;
	};
};
