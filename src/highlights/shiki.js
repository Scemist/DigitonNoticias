import { createHighlighter } from 'shiki';

let highlighter;

createHighlighter({
	themes: ['night-owl'],
	langs: ['javascript', 'php', 'html', 'js', 'css'],
}).then((hl) => {
	highlighter = hl;
});

export default function addShikiMarkdownHighlighter(code, language) {
	if (!highlighter)
		return `<pre><code>${code}</code></pre>`;

	const highlighted = highlighter.codeToHtml(code, {
		lang: language,
		theme: 'night-owl',
	}).replace(
		/<pre class="shiki[^"]+"/,
		'<pre class="shiki w-max leading-5 min-w-full'
		+ ' text-sm py-4 px-6 md:py-8 md:px-10"'
	);

	const classes = 'overflow-x-auto'
		+ ' dark:border dark:border-slate-700'
		+ ' shadow shadow-gray-400 dark:shadow-inherit'
		+ ' rounded-lg w-full min-w-full max-w-full mb-4'

	return `<div class="${classes}">${highlighted}</div>`
}
