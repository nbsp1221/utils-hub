import ts from 'rollup-plugin-ts';

/** @type {import('rollup').RollupOptions} */
export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      preserveModules: true,
      sourcemap: true,
    },
    {
      dir: 'dist/esm',
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
