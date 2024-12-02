import { highlightCode } from '../../highlights/shiki.js'

export default (markdownLib) => {
	markdownLib.renderer.rules.fence = (tokens, idx) => {
		const token = tokens[idx];
		const language = token.info.trim();
		const content = token.content;

		return highlightCode(content, language)
	};

	markdownLib.renderer.rules.code_inline = (tokens, idx) => {
		const token = tokens[idx];
		const content = token.content;

		return `<code class="text-xs bg-slate-600 dark:bg-slate-800 text-slate-300 mx-1 px-2 py-1 rounded select-all">${content}</code>`
	};
};
