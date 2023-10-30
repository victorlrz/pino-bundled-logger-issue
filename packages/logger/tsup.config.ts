import esbuildPluginPino from 'esbuild-plugin-pino';
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/pino-pretty-transport.ts'],
  esbuildPlugins: [esbuildPluginPino({ transports: ['pino-pretty'] })],
  dts: true,
  format: ['esm', 'cjs'],
  clean: true,
});
