import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})




// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     include: ['react', 'react-dom'],
//   },
//   // Specify file extensions explicitly
//   resolve: {
//     alias: {
//       // Ensure that JSX files are treated as JavaScript modules
//       // This is the default behavior in Vite, but specifying it explicitly can help
//       entries: [{ find: /\.jsx$/, replacement: '.jsx' }],
//     },
//   },
// });

