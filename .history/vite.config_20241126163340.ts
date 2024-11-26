export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/<repository-name>/', // Replace <repository-name> with the name of your GitHub repo
});
