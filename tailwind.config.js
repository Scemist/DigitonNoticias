module.exports = {
	content: ["./src/**/*.{html,js,njk,md}"],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['OpenSans', 'sans-serif', 'ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
				mono: ['FiraCode', 'ui-monospace','SFMono-Regular','Menlo','Monaco','Consolas','"Liberation Mono"','"Courier New"','monospace'],
			},
		},
	},
	plugins: [],
};
