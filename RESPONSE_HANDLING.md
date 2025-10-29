# Response Handling Implementation

This document outlines how the News Explorer application handles different response states according to the specified guidelines.

## State Management

### App.jsx - Central State Management
- **`articles`**: Array of search results stored at app level
- **`savedArticles`**: Array of saved articles stored at app level
- **`handleSaveArticle`**: Adds articles to saved list (prevents duplicates)
- **`handleRemoveArticle`**: Removes articles from saved list
- **`isArticleSaved`**: Checks if an article is already saved

## Response States

### 1. Initial State (No Search)
- **Condition**: `!hasSearched`
- **Display**: "Enter a search term to find news articles"
- **Result**: No cards shown on the page

### 2. Loading State
- **Condition**: `hasSearched && isLoading`
- **Display**: Preloader animation in search results block
- **Component**: `<Preloader />` component with spinner

### 3. Error State
- **Condition**: `hasSearched && !isLoading && error`
- **Display**: "Sorry, something went wrong during the request. Please try again later."
- **Styling**: Centered text with error styling

### 4. No Results Found
- **Condition**: `hasSearched && !isLoading && !error && articles.length === 0`
- **Display**: 
  ```
  Nothing found
  Sorry, but nothing matched your search terms.
  ```
- **Styling**: Centered with title and subtitle

### 5. Results Found
- **Condition**: `hasSearched && !isLoading && !error && articles.length > 0`
- **Display**: Search results with cards and "Show more" functionality

## Card Display Logic

### Initial Display
- **Rule**: Show only 3 cards initially
- **Implementation**: `visibleArticles` state starts at 3

### Show More Functionality
- **Button Condition**: `hasMoreArticles` (when `visibleArticles < articles.length`)
- **Action**: Shows 3 additional cards when clicked
- **Implementation**: Increments `visibleArticles` by 3

### Show More Button Disappears
- **Condition**: When all cards are displayed (`visibleArticles >= articles.length`)
- **Result**: "Show more" button is hidden

### Grid Layout
- **Desktop**: 3 cards per row (`grid-template-columns: repeat(3, 1fr)`)
- **Mobile**: 1 card per row (`grid-template-columns: 1fr`)
- **Gap**: 16px between cards

## Save/Remove Functionality

### Save Article
- **Trigger**: Click bookmark icon on unsaved article
- **Action**: Adds article to `savedArticles` array in App.jsx
- **Validation**: Prevents duplicate saves (checks by URL)
- **Visual**: Bookmark icon fills when saved

### Remove Article
- **Trigger**: Click filled bookmark icon on saved article
- **Action**: Removes article from `savedArticles` array
- **Visual**: Bookmark icon becomes outline

### Saved Status Check
- **Method**: `isArticleSaved(article)` compares URLs
- **Usage**: Determines bookmark icon state and save/remove action

## Component Data Flow

```
App.jsx (state management)
├── HomePage
│   └── Main (receives articles, setArticles, onSaveArticle, isArticleSaved)
│       └── NewsCard (receives isSaved status)
└── SavedNewsPage
    └── SavedNews (receives savedArticles, onRemoveArticle)
        └── SavedArticlesList
            └── NewsCard (receives isSaved=true, onRemove)
```

## Error Handling

### API Errors
- Network errors, 401 (Invalid API key), 429 (Rate limit)
- All errors show: "Sorry, something went wrong during the request. Please try again later."

### Form Validation
- Empty search shows: "Please enter a keyword"
- Clears error when user starts typing

## Mock Data Fallback
- When no API key is provided, uses mock data for development
- Filters mock articles based on search query
- Simulates API delay (1 second) for realistic UX testing
