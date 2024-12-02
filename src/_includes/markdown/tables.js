export default (markdownLib) => {
	markdownLib.renderer.rules.table_open = (tokens, idx) => {
		return `<div class="overflow-auto"><table class="w-full border-collapse border border-gray-500 dark:border-slate-700 rounded-lg">`;
	};

	markdownLib.renderer.rules.table_close = (tokens, idx) => {
		return `</table></div>`;
	};

	markdownLib.renderer.rules.thead_open = () => {
		return `<thead class="font-bold text-slate-600 dark:text-slate-400 bg-gray-200 dark:bg-slate-800">`;
	};

	markdownLib.renderer.rules.tbody_open = () => {
		return `<tbody class="divide-y divide-gray-200">`;
	};

	markdownLib.renderer.rules.tr_open = () => {
		return `<tr class="hover:bg-gray-300 dark:hover:bg-slate-800">`;
	};

	markdownLib.renderer.rules.th_open = () => {
		return `<th class="px-4 py-2 text-left font-semibold text-sm border border-gray-300 dark:border-slate-700">`;
	};

	markdownLib.renderer.rules.td_open = () => {
		return `<td class="px-4 py-2 text-sm border border-gray-300 dark:border-slate-700">`;
	};
};
