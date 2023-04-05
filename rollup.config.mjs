import ts from 'rollup-plugin-ts';

/** @type {import('rollup').RollupOptions} */
export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: '[name].cjs',
      preserveModules: true,
      sourcemap: true,
    },
    {
      dir: 'dist',
      format: 'esm',
      entryFileNames: '[name].js',
      preserveModules: true,
      sourcemap: true,
    },
  ],
  external: [
    'react',
    'react/jsx-runtime',
  ],
  plugins: [
    ts(),
  ],
};
