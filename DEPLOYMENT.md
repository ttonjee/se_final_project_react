# Deploy to GitHub Pages

This project can be deployed to GitHub Pages for free hosting.

## Prerequisites
1. Push your code to a GitHub repository
2. Install gh-pages package: `npm install --save-dev gh-pages`

## Deployment Steps

1. Add the following to your `package.json` scripts:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

2. Add the following to your `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Replace with your actual repository name
  server: {
    port: 3000,
  },
});
```

3. Run the deployment command:
```bash
npm run deploy
```

4. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Your site will be available at: `https://yourusername.github.io/your-repo-name/`

## Alternative: Manual Deployment
You can also manually deploy by:
1. Run `npm run build`
2. Upload the `dist` folder contents to any static hosting service
3. Services like Netlify, Vercel, or GitHub Pages work well

## Environment Variables
For production deployment with real News API:
1. Get an API key from https://newsapi.org/
2. Replace the mock data in `src/utils/newsApi.js`
3. Use environment variables for the API key in production
