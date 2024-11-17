export default (markdownLib) => {
	markdownLib.renderer.rules.paragraph_open = (tokens, idx) => {
		const parent = tokens[idx].parent;

		if (parent && parent.type === 'list_item')
			return '';

		return `<p class="mb-10">`;
	};
};
