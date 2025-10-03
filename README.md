# News Explorer

A React application for searching and saving news articles using the NewsAPI.

## Features

- 🔍 Search news articles by keyword
- 📱 Responsive design for all devices
- 🔐 User authentication (login/register modals)
- 💾 Save/remove articles functionality
- ⚡ Real-time form validation
- 🎨 Modern UI with smooth animations

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up NewsAPI (required for live data):**
   - Get API key from https://newsapi.org/register
   - Copy `.env.example` to `.env`
   - Add your API key to `.env`

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## API Integration

The app uses NewsAPI for fetching news articles:
- **Search endpoint**: Environment-aware URLs (development vs production)
- **Form validation**: "Please enter a keyword" for empty searches
- **Error handling**: Network errors, rate limits, invalid API keys
- **Fallback**: Mock data for development without API key

## Project Structure

```
src/
├── components/           # React components
│   ├── App/             # Main app component
│   ├── Header/          # Navigation header
│   ├── Main/            # Home page content
│   ├── SearchForm/      # Search input with validation
│   ├── NewsCard/        # Article display card
│   ├── LoginModal/      # Authentication modal
│   └── ...
├── utils/               # API utilities
├── assets/              # Images and icons
└── vendor/              # Third-party styles
```

## Technologies Used

- React 18.3.1
- React Router DOM 6.26.2
- Vite 5.3.1
- CSS Modules with BEM methodology
- NewsAPI for data

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
