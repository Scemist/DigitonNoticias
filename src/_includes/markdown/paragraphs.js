export default (markdownLib) => {
	markdownLib.renderer.rules.paragraph_open = (tokens, idx) => {
		if (tokens[idx - 1] && tokens[idx - 1].type === 'list_item_open')
			return '';

		return `<p class="mb-10">`;
	};
};
