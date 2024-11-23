import { createHighlighter } from 'shiki';

let highlighter;

createHighlighter({
	themes: ['night-owl'],
	langs: ['javascript', 'php', 'html', 'js', 'css'],
}).then((hl) => {
	highlighter = hl;
});

export default function addShikiMarkdownHighlighter(eleventyConfig) {
	eleventyConfig.addMarkdownHighlighter((code, language) => {

		if (!highlighter)
			return `<pre><code>${code}</code></pre>`;

		const highlighted = highlighter.codeToHtml(code, {
			lang: language,
			theme: 'night-owl',
		}).replace(
			/<pre class="shiki[^"]+"/,
			'<pre class="shiki w-max rounded shadow leading-5 min-w-full'
			+ ' dark:border dark:border-slate-600'
			+ ' text-sm py-4 px-6 md:py-8 md:px-10"'
		);

		return `<div class="overflow-x-auto w-full min-w-full max-w-full">${highlighted}</div>`
	});
}
