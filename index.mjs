import { createServer } from "vite";

const server = await createServer({
  optimizeDeps: { include: ["prismjs/components/prism-csharp"]},
});

server.listen();