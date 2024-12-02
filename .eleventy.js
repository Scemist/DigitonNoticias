import fs from 'fs';
import path from 'path';
import markdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';

import headings from "./src/_includes/markdown/headings.js";
import paragraphs from "./src/_includes/markdown/paragraphs.js";
import lists from "./src/_includes/markdown/lists.js";
import codes from "./src/_includes/markdown/codes.js";
import blockquotes from "./src/_includes/markdown/blockquotes.js";
import tables from "./src/_includes/markdown/tables.js";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default function (eleventyConfig) {
	const markdownLib = markdownIt({ html: true }).use(markdownItAttrs);
	headings(markdownLib)
	lists(markdownLib)
	paragraphs(markdownLib)
	codes(markdownLib)
	blockquotes(markdownLib)
	tables(markdownLib)
	eleventyConfig.setLibrary('md', markdownLib);

	eleventyConfig.addCollection(
		'posts',
		(collectionApi) => collectionApi.getFilteredByGlob('src/posts/*.md')
	);

	eleventyConfig.addCollection(
		'highlights',
		(collectionApi) => collectionApi.getFilteredByGlob('src/posts/*.md')
	);

	eleventyConfig.addShortcode('addStyle', function (fileName) {
		const fullPath = path.join(__dirname, 'docs', 'styles', fileName);

		if (fs.existsSync(fullPath))
			return fs.readFileSync(fullPath, 'utf8')

		return `/* CSS file not found: ${fileName} */`;
	});

	eleventyConfig.addShortcode('addScript', function (filePath) {
		const fullPath = path.join(__dirname, 'src', 'scripts', filePath);

		if (fs.existsSync(fullPath))
			return fs.readFileSync(fullPath, 'utf8')

		return `/* JS file not found: ${filePath} */`
	});

	eleventyConfig.addFilter("formatDate", (date) => {
		const d = new Date(date);
		const day = String(d.getDate()).padStart(2, "0");
		const month = String(d.getMonth() + 1).padStart(2, "0"); // Mês é zero-indexado
		const year = d.getFullYear();
		return `${day}/${month}/${year}`;
	});

	eleventyConfig.addPassthroughCopy('./src/scripts');
	eleventyConfig.addPassthroughCopy('./src/images');
	eleventyConfig.addPassthroughCopy('./src/styles/fonts');

	return {
		dir: {
			input: 'src',
			output: 'docs',
		},
	};
}
