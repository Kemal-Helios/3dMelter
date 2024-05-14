import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
export default defineConfig({
    /*server: {
        headers: {
          "Strict-Transport-Security": "max-age=86400; includeSubDomains", // Adds HSTS options to your website, with a expiry time of 1 day
          "X-Content-Type-Options": "nosniff", // Protects from improper scripts runnings
          "X-Frame-Options": "DENY", // Stops your site being used as an iframe
          "X-XSS-Protection": "1; mode=block", // Gives XSS protection to legacy browsers
          "Access-Control-Allow-Origin": "*",
      },
    },*/
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
        }),
        react(),
    ],
    assetsInclude:['**/*.gltf'],
});
