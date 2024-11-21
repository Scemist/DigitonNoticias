export default (markdownLib) => {
	markdownLib.renderer.rules.ordered_list_open = (tokens, idx) => {
		return `<ol class="list-decimal list-inside text-xl leading-10 text-gray-700 dark:text-gray-400">`;
	};

	markdownLib.renderer.rules.bullet_list_open = (tokens, idx) => {
		return `<ul class="flex justify-between flex-col gap-8">`;
	};

	markdownLib.renderer.rules.list_item_open = (tokens, idx, options, env, self) => {
		return `<li class="flex"><i class="h-32 w-32 text-gray-400 mr-4" data-lucide="dot"></i>`;
	};

	// markdownLib.renderer.rules.list_item_close = (tokens, idx) => {
	// 	return `<li class="">`;
	// };
};
