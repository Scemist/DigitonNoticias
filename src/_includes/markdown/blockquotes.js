export default (markdownLib) => {
	markdownLib.renderer.rules.blockquote_open = (tokens, idx) => {
		return `<blockquote class="border-l-2 border-slate-400 dark:border-slate-600 pl-4 text-sm text-gray-500 dark:text-gray-500">`;
	};
};
