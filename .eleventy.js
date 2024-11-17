import fs from 'fs';
import path from 'path';
import markdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default function (eleventyConfig) {
	const markdownLib = markdownIt({ html: true }).use(markdownItAttrs);
	eleventyConfig.setLibrary('md', markdownLib);

	eleventyConfig.addShortcode('addStyle', function (fileName) {
		const fullPath = path.join(__dirname, 'docs', 'styles', fileName);

		if (fs.existsSync(fullPath)) {
			return fs.readFileSync(fullPath, 'utf8');
		} else {
			return `/* CSS file not found: ${fileName} */`;
		}
	});

	eleventyConfig.addShortcode('addScript', function (filePath) {
		const fullPath = path.join(__dirname, 'src', 'scripts', filePath);

		if (fs.existsSync(fullPath)) {
			return fs.readFileSync(fullPath, 'utf8');
		} else {
			return `/* JS file not found: ${filePath} */`;
		}
	});

	eleventyConfig.addPassthroughCopy('./src/scripts');

	return {
		dir: {
			input: 'src',
			output: 'docs',
		},
	};
}
