import ts from 'rollup-plugin-ts';

/** @type {import('rollup').RollupOptions} */
export default {
  input: {
    react: 'src/react/index.ts',
    string: 'src/string/index.ts',
  },
  output: [
    {
      dir: 'dist/cjs',
      entryFileNames: '[name]/index.cjs',
      format: 'cjs',
      preserveModules: true,
      sourcemap: true,
    },
    {
      dir: 'dist/esm',
      entryFileNames: '[name]/index.js',
      format: 'esm',
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
