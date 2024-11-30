const hasSpaceBetweenItems = (tokens, idx) => {
	if (tokens[idx + 1])
		return tokens[idx + 1].content.trim() === '';

	return false;
};

export default (markdownLib) => {
	markdownLib.renderer.rules.ordered_list_open = (tokens, idx) => {
		return `<ol class="list-decimal list-inside text-xl leading-10 text-gray-700 dark:text-gray-400">`;
	};

	markdownLib.renderer.rules.bullet_list_open = (tokens, idx) => {
		return `<ul class="flex justify-between flex-col mb-8">`;
	};

	markdownLib.renderer.rules.list_item_open = (tokens, idx, options, env, self) => {
		const additionalSpaceClass = hasSpaceBetweenItems(tokens, idx) ? 'mb-8' : 'mb-2';

		return `
			<li class="flex gap-2 ${additionalSpaceClass}">
				<div class="h-7 py-1 text-gray-400">
					<i data-lucide="dot"></i>
				</div>
				<div>`;
	};

	markdownLib.renderer.rules.list_item_close = (tokens, idx) => {
		return `</div></li>`;
	};
};
