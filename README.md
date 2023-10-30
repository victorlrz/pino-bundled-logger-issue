# To reproduce the Error: 
- Clone the repository
- Run `pnpm i && pnpm build` 
- You can run the Web Application in Dev mode with `cd apps/web && pnpm dev`
- In your browser, go to `http://localhost:3000/api/hello`
- You should reproduce the following error `error uncaughtException: Error: Cannot find module 'my-turborepo/apps/web/.next/server/pages/api/lib/worker.js'`
- Installing 'pino' or 'thread-stream' in the 'apps/web' folder will fix the issue
```