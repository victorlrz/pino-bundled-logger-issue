import pino, { LevelWithSilent, Logger as Logger$1, Level } from 'pino';

declare const createLogger: {
    setLevel: (level: LevelWithSilent) => Logger$1;
    level: pino.LevelWithSilentOrString;
    fatal: pino.LogFn;
    error: pino.LogFn & pino.LogFn;
    warn: pino.LogFn & pino.LogFn;
    info: pino.LogFn & pino.LogFn;
    debug: pino.LogFn & pino.LogFn;
    trace: pino.LogFn;
    silent: pino.LogFn;
    version: string;
    levels: pino.LevelMapping;
    useLevelLabels: boolean;
    customLevels: {
        [key: string]: number;
    };
    useOnlyCustomLevels: boolean;
    levelVal: number;
    child<ChildOptions extends pino.ChildLoggerOptions = {}>(bindings: pino.Bindings, options?: ChildOptions | undefined): pino.Logger<{
        base: {
            service: string;
        };
        transport?: {
            target: string;
            options: {
                translateTime: boolean;
                ignore: string;
            };
        } | undefined;
        customLevels: {
            error: number;
            warn: number;
            info: number;
            debug: number;
        };
        level: "info";
    } & ChildOptions>;
    onChild: <ChildOptions_1 extends pino.ChildLoggerOptions>(child: pino.Logger<{
        base: {
            service: string;
        };
        transport?: {
            target: string;
            options: {
                translateTime: boolean;
                ignore: string;
            };
        } | undefined;
        customLevels: {
            error: number;
            warn: number;
            info: number;
            debug: number;
        };
        level: "info";
    } & ChildOptions_1>) => void;
    on<Opts = {
        base: {
            service: string;
        };
        transport?: {
            target: string;
            options: {
                translateTime: boolean;
                ignore: string;
            };
        } | undefined;
        customLevels: {
            error: number;
            warn: number;
            info: number;
            debug: number;
        };
        level: "info";
    }>(event: "level-change", listener: pino.LevelChangeEventListener<Opts>): Logger$1<{
        base: {
            service: string;
        };
        transport?: {
            target: string;
            options: {
                translateTime: boolean;
                ignore: string;
            };
        } | undefined;
        customLevels: {
            error: number;
            warn: number;
            info: number;
            debug: number;
        };
        level: "info";
    }>;
    addListener<Opts_1 = {
        base: {
            service: string;
        };
        transport?: {
            target: string;
            options: {
                translateTime: boolean;
                ignore: string;
            };
        } | undefined;
        customLevels: {
            error: number;
            warn: number;
            info: number;
            debug: number;
        };
        level: "info";
    }>(event: "level-change", listener: pino.LevelChangeEventListener<Opts_1>): Logger$1<{
        base: {
            service: string;
        };
        transport?: {
            target: string;
            options: {
                translateTime: boolean;
                ignore: string;
            };
        } | undefined;
        customLevels: {
            error: number;
            warn: number;
            info: number;
            debug: number;
        };
        level: "info";
    }>;
    once<Opts_2 = {
        base: {
            service: string;
        };
        transport?: {
            target: string;
            options: {
                translateTime: boolean;
                ignore: string;
            };
        } | undefined;
        customLevels: {
            error: number;
            warn: number;
            info: number;
            debug: number;
        };
        level: "info";
    }>(event: "level-change", listener: pino.LevelChangeEventListener<Opts_2>): Logger$1<{
        base: {
            service: string;
        };
        transport?: {
            target: string;
            options: {
                translateTime: boolean;
                ignore: string;
            };
        } | undefined;
        customLevels: {
            error: number;
            warn: number;
            info: number;
            debug: number;
        };
        level: "info";
    }>;
    prependListener<Opts_3 = {
        base: {
            service: string;
        };
        transport?: {
            target: string;
            options: {
                translateTime: boolean;
                ignore: string;
            };
        } | undefined;
        customLevels: {
            error: number;
            warn: number;
            info: number;
            debug: number;
        };
        level: "info";
    }>(event: "level-change", listener: pino.LevelChangeEventListener<Opts_3>): Logger$1<{
        base: {
            service: string;
        };
        transport?: {
            target: string;
            options: {
                translateTime: boolean;
                ignore: string;
            };
        } | undefined;
        customLevels: {
            error: number;
            warn: number;
            info: number;
            debug: number;
        };
        level: "info";
    }>;
    prependOnceListener<Opts_4 = {
        base: {
            service: string;
        };
        transport?: {
            target: string;
            options: {
                translateTime: boolean;
                ignore: string;
            };
        } | undefined;
        customLevels: {
            error: number;
            warn: number;
            info: number;
            debug: number;
        };
        level: "info";
    }>(event: "level-change", listener: pino.LevelChangeEventListener<Opts_4>): Logger$1<{
        base: {
            service: string;
        };
        transport?: {
            target: string;
            options: {
                translateTime: boolean;
                ignore: string;
            };
        } | undefined;
        customLevels: {
            error: number;
            warn: number;
            info: number;
            debug: number;
        };
        level: "info";
    }>;
    removeListener<Opts_5 = {
        base: {
            service: string;
        };
        transport?: {
            target: string;
            options: {
                translateTime: boolean;
                ignore: string;
            };
        } | undefined;
        customLevels: {
            error: number;
            warn: number;
            info: number;
            debug: number;
        };
        level: "info";
    }>(event: "level-change", listener: pino.LevelChangeEventListener<Opts_5>): Logger$1<{
        base: {
            service: string;
        };
        transport?: {
            target: string;
            options: {
                translateTime: boolean;
                ignore: string;
            };
        } | undefined;
        customLevels: {
            error: number;
            warn: number;
            info: number;
            debug: number;
        };
        level: "info";
    }>;
    isLevelEnabled(level: pino.LevelWithSilentOrString): boolean;
    bindings(): pino.Bindings;
    setBindings(bindings: pino.Bindings): void;
    flush(cb?: ((err?: Error | undefined) => void) | undefined): void;
    off(eventName: string | symbol, listener: (...args: any[]) => void): Logger$1<{
        base: {
            service: string;
        };
        transport?: {
            target: string;
            options: {
                translateTime: boolean;
                ignore: string;
            };
        } | undefined;
        customLevels: {
            error: number;
            warn: number;
            info: number;
            debug: number;
        };
        level: "info";
    }>;
    removeAllListeners(event?: string | symbol | undefined): Logger$1<{
        base: {
            service: string;
        };
        transport?: {
            target: string;
            options: {
                translateTime: boolean;
                ignore: string;
            };
        } | undefined;
        customLevels: {
            error: number;
            warn: number;
            info: number;
            debug: number;
        };
        level: "info";
    }>;
    setMaxListeners(n: number): Logger$1<{
        base: {
            service: string;
        };
        transport?: {
            target: string;
            options: {
                translateTime: boolean;
                ignore: string;
            };
        } | undefined;
        customLevels: {
            error: number;
            warn: number;
            info: number;
            debug: number;
        };
        level: "info";
    }>;
    getMaxListeners(): number;
    listeners(eventName: string | symbol): Function[];
    rawListeners(eventName: string | symbol): Function[];
    emit(eventName: string | symbol, ...args: any[]): boolean;
    listenerCount(eventName: string | symbol): number;
    eventNames(): (string | symbol)[];
};

type Logger = Logger$1;
type LogLevel = Level;

export { LogLevel, Logger, createLogger };
