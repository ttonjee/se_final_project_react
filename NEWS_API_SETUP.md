# NewsAPI Setup Instructions

## Getting Your API Key

1. **Register with NewsAPI**
   - Go to https://newsapi.org/register
   - Create a free account
   - Verify your email address
   - You'll receive an API key

2. **Set Up Environment Variables**
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Open `.env` and replace `your-api-key-here` with your actual API key:
     ```
     VITE_NEWS_API_KEY=your-actual-api-key-here
     ```

3. **Restart the Development Server**
   ```bash
   npm run dev
   ```

## API Endpoints Used

### Search Everything
- **Development**: `https://newsapi.org/v2/everything`
- **Production**: `https://nomoreparties.co/news/v2/everything`
- **Parameters**:
  - `q`: Search query (what the user entered)
  - `apiKey`: Your API key from NewsAPI registration
  - `from`: Date 7 days before current date (YYYY-MM-DD)
  - `to`: Current date (YYYY-MM-DD)
  - `pageSize`: 100 (maximum for free version)
  - `language`: en (English only)
  - `sortBy`: publishedAt (most recent first)

### Top Headlines
- **Development**: `https://newsapi.org/v2/top-headlines`
- **Production**: `https://nomoreparties.co/news/v2/top-headlines`
- **Parameters**:
  - `country`: us (United States)
  - `apiKey`: Your API key
  - `pageSize`: 12 (number of results)

## Form Validation

The search form includes the following validation:
- **Empty input**: Shows "Please enter a keyword" error
- **Real-time validation**: Error clears when user starts typing
- **Visual feedback**: Input field gets red border on error

## Error Handling

The application handles various API errors:
- **401 Unauthorized**: Invalid API key
- **429 Too Many Requests**: Rate limit exceeded
- **Network errors**: Connection issues
- **Generic errors**: Fallback error message

## Development Mode

Without an API key, the application will:
- Show a warning in the console
- Use mock data for development
- Allow you to test the UI functionality

**Note**: Vite requires environment variables to be prefixed with `VITE_` to be accessible in the browser.

## Production Deployment

For production deployment:
1. Ensure your API key is set in the hosting platform's environment variables
2. The key should be named `VITE_NEWS_API_KEY`
3. Never commit the `.env` file to version control

## Rate Limits

NewsAPI free tier includes:
- 1,000 requests per day
- 500 requests per month for development
- Upgrade to paid plan for production use
