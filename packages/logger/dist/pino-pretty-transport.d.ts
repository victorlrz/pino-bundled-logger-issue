import pinoPretty, { PrettyOptions } from 'pino-pretty';

declare const pinoPrettyTransport: (opts: PrettyOptions) => pinoPretty.PrettyStream;

export { pinoPrettyTransport as default };
