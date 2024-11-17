export default (markdownLib) => {
	// markdownLib.renderer.rules.bullet_list_open = (tokens, idx) => {)
	// 	return `<ol class="list-decimal list-inside text-xl leading-10 text-gray-700 dark:text-gray-400">`;
	// };

	markdownLib.renderer.rules.ul_open = (tokens, idx) => {
		return `<ul class="flex justify-between flex-col font-semibold">`;
	};
};
