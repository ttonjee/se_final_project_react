# Environment Variables in Vite vs Create React App

This project uses Vite instead of Create React App, which has different conventions for environment variables.

## Key Differences

### Create React App (Old way):
```bash
# .env file
REACT_APP_NEWS_API_KEY=your-key-here

# JavaScript usage
const apiKey = process.env.REACT_APP_NEWS_API_KEY;
```

### Vite (Our current setup):
```bash
# .env file
VITE_NEWS_API_KEY=your-key-here

# JavaScript usage
const apiKey = import.meta.env.VITE_NEWS_API_KEY;
```

## Important Notes

1. **Prefix Required**: Vite only exposes environment variables that start with `VITE_`
2. **import.meta.env**: Use `import.meta.env` instead of `process.env`
3. **Mode Detection**: Use `import.meta.env.MODE` instead of `process.env.NODE_ENV`

## Environment Modes

- **Development**: `import.meta.env.MODE === 'development'`
- **Production**: `import.meta.env.MODE === 'production'`

## Security

- Only variables prefixed with `VITE_` are exposed to the client
- Never put sensitive information in VITE_ prefixed variables
- The .env file should never be committed to version control

## Example Usage in Our App

```javascript
// Environment-based API URL
const apiUrl = import.meta.env.MODE === "production" 
  ? "https://nomoreparties.co/news/v2/everything"
  : "https://newsapi.org/v2/everything";

// API Key from environment
const apiKey = import.meta.env.VITE_NEWS_API_KEY || 'fallback-key';
```
