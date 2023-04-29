import fs from 'node:fs';
import path from 'node:path';
import typescript from '@rollup/plugin-typescript';

/** @type {import('rollup').RollupOptions[]} */
export default fs.readdirSync('src').map((target) => ({
  input: path.join('src', target, 'index.ts'),
  output: [
    {
      dir: target,
      format: 'cjs',
      entryFileNames: '[name].cjs',
      preserveModules: true,
      sourcemap: true,
    },
    {
      dir: target,
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
    typescript({
      compilerOptions: {
        declaration: true,
        declarationDir: target,
      },
      include: [
        path.join('src', target, '**/*.ts'),
        path.join('src', target, '**/*.tsx'),
      ],
      exclude: [
        'src/**/*.test.ts',
        'src/**/*.test.tsx',
      ],
    }),
  ],
}));
