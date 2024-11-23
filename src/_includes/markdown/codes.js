import highlighter from '../../highlights/shiki.js'

export default (markdownLib) => {
	markdownLib.renderer.rules.fence = (tokens, idx) => {
		const token = tokens[idx];
		const language = token.info.trim();
		const content = token.content;

		return highlighter(content, language)
	};
};
