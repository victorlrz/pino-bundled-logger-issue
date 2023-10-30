import pino, { LoggerOptions } from 'pino';
import pinoPretty, { colorizerFactory, PrettyOptions } from 'pino-pretty';
const levelColorize = colorizerFactory(true);

const NEXT_PAD = 7;
const SEPARATOR = '-';

type LogType = LoggerOptions & { [key: string]: unknown };

const pinoPrettyTransport = (opts: PrettyOptions): pinoPretty.PrettyStream =>
  pinoPretty({
    ...opts,
    messageFormat: (log: LogType, messageKey: string) => {
      const message = log[messageKey] as string;

      if (log.level === undefined) {
        return message;
      }

      const level = pino.levels.labels[parseInt(log.level, 0)] ?? 'unknown';

      const paddedLevelLength = level.length;
      const separator = SEPARATOR.padStart(NEXT_PAD - paddedLevelLength, ' ');

      return `${separator} ${message}`;
    },
    customPrettifiers: {
      level: level =>
        levelColorize(level as string)
          .toLowerCase()
          .slice(0, -1),
    },
  });

export default pinoPrettyTransport;
