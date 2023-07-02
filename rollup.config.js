import typescript from "@rollup/plugin-typescript";
import terser from '@rollup/plugin-terser';

export default {
    input: 'src/js/comic.ts',
    output: {
        dir: 'src/js',
        format: 'cjs'
    },
    plugins: [typescript(), terser()]
};
