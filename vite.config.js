import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '192.168.100.42', // Allows access from any IP on your local network
    port: 3000,     // Default port, change if needed
  },
});
