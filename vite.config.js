import path from 'path';

export default {
	build: {
		root: 'src',
		rollupOptions: {
			input: {
				'lucide-icons': path.resolve('src/js/lucide-icons.js'),
			},
			output: {
				dir: path.resolve(__dirname, 'src/scripts/build'),
				entryFileNames: '[name].js',
				format: 'es',
				chunkFileNames: '[name].js'
			}
		}
	}
};
