# News Explorer

A React application for searching and saving news articles using the NewsAPI.

## 🌐 Live Demo

**Deployed Application:** [https://your-app-name.netlify.app](https://your-app-name.netlify.app)

## Features

- 🔍 Search news articles by keyword
- 📱 Responsive design for all devices  
- 🔐 User authentication (login/register modals)
- 💾 Save/remove articles functionality
- ⚡ Real-time form validation
- 🎨 Modern UI with smooth animations
- 👤 About section with author information

## Technologies Used

- **Frontend:** React 18.3.1, React Router DOM 6.26.2
- **Build Tool:** Vite 5.3.1
- **Styling:** CSS with BEM methodology
- **API:** NewsAPI for real-time news data
- **Deployment:** Netlify/Vercel

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- NewsAPI key from [newsapi.org](https://newsapi.org/register)

### Local Development

1. **Clone and install dependencies:**
   ```bash
   git clone https://github.com/ttonjee/se_final_project_react.git
   cd se_final_project_react
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your NewsAPI key:
   ```
   VITE_NEWS_API_KEY=your_actual_api_key_here
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

4. **Build for production:**
   ```bash
   npm run build
   ```

## API Integration

The app integrates with NewsAPI for fetching articles:
- **Search endpoint**: `/v2/everything`
- **Form validation**: Shows "Please enter a keyword" for empty searches
- **Error handling**: Handles network errors, rate limits, invalid API keys
- **Fallback**: Mock data for development without API key

## Project Structure

```
src/
├── components/           # React components
│   ├── App/             # Main app component
│   ├── Header/          # Navigation header
│   ├── Main/            # Home page content
│   ├── About/           # About section with author info
│   ├── SearchForm/      # Search input with validation
│   ├── NewsCard/        # Article display card
│   ├── LoginModal/      # Authentication modal
│   ├── Footer/          # Site footer
│   └── ...
├── utils/               # API utilities
│   ├── newsApi.js       # NewsAPI integration
│   └── dateUtils.js     # Date formatting utilities
├── assets/              # Images and icons
│   ├── icons/           # SVG icons
│   └── smiling face.svg # About section placeholder
└── vendor/              # Third-party styles
    ├── fonts/           # Web fonts
    └── normalize.css    # CSS reset
```

## Key Features Implementation

### 🔍 News Search
- Real-time search with NewsAPI
- Form validation and error handling
- Pagination with "Show more" functionality
- Date range filtering (last 7 days)

### 👤 About Section
- Author information display
- Custom SVG placeholder with smiling face
- Responsive design for all screen sizes
- Clean typography and spacing

### 📱 Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 1024px
- Flexible grid layouts
- Touch-friendly interface

### 🎨 Modern UI
- BEM CSS methodology
- Custom fonts (Roboto, Roboto Slab)
- Smooth hover effects and transitions
- Consistent color scheme

## Deployment

### Netlify Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Add environment variable: `VITE_NEWS_API_KEY`

3. **Custom domain (optional):**
   - Configure custom domain in Netlify settings
   - Update README with actual deployment URL

### Vercel Deployment

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

3. **Set environment variables:**
   ```bash
   vercel env add VITE_NEWS_API_KEY
   ```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_NEWS_API_KEY` | NewsAPI key from newsapi.org | Yes |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is part of the TripleTen Software Engineering bootcamp.

## Contact

- **Author:** [Your Name]
- **GitHub:** [ttonjee](https://github.com/ttonjee)
- **Email:** [your-email@example.com]

---

⭐ Don't forget to star this repo if you found it helpful!
