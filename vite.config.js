import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config()  // start dot env


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
    '/shoes' : { target : process.env.VITE_REACT_APP_BACKEND_BASEURL}
  }}
})
