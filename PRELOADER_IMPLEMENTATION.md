# Preloader Component Implementation

This document outlines the implementation of the Preloader component with the circle-preloader animation.

## ✅ Component Structure

### JSX Implementation
```jsx
function Preloader() {
  return (
    <div className="preloader">
      <div className="circle-preloader"></div>
      <p className="preloader__text">Searching for news...</p>
    </div>
  );
}
```

### CSS Animation
- **Element**: `<div>` with class `circle-preloader`
- **Animation**: Spinning circle with specified design
- **Duration**: 0.75 seconds per rotation
- **Timing**: Infinite linear animation

## 🎨 Visual Design

### Circle Preloader Specs
- **Size**: 50px × 50px
- **Border**: 4px solid with color variations
  - Main border: `#444` (dark gray)
  - Bottom border: `#888` (lighter gray for contrast)
- **Shape**: Perfect circle with `border-radius: 50%`
- **Position**: Absolutely centered in container

### Animation Details
- **Rotation**: Full 360° rotation
- **Speed**: 0.75 seconds per complete spin
- **Easing**: Linear (consistent speed)
- **Loop**: Infinite repetition

## 📍 Positioning

### Layout Structure
```css
.preloader {
  position: relative;     /* Container for absolute positioning */
  padding: 60px 20px;     /* Breathing space */
}

.circle-preloader {
  position: absolute;     /* Centered positioning */
  top: 0; left: 0; right: 0; bottom: 0;
  margin: auto;          /* Perfect centering */
}
```

### Text Placement
- Text appears below the spinning circle
- Margin-top: 80px to provide proper spacing
- Center-aligned with consistent typography

## 🔄 Animation Keyframes

```css
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
```

- **Simple rotation**: Clean 360° spin
- **Performance optimized**: Uses transform property
- **Smooth animation**: No easing for consistent rotation speed

## 🚀 Integration

### Usage in Application
- Appears during news search API calls
- Provides visual feedback for loading states
- Enhances user experience with professional animation

### Current Implementation
- Used in Main component during `handleSearch`
- Shows while `isLoading` state is true
- Includes descriptive text: "Searching for news..."

## 🎯 Benefits

1. **Visual Consistency**: Matches design specifications exactly
2. **Performance**: Lightweight CSS animation
3. **Accessibility**: Clear loading indication
4. **Professional Appearance**: Smooth, modern animation
5. **User Experience**: Provides feedback during wait times

The implementation provides a clean, professional loading animation that clearly communicates to users that the application is actively searching for news articles.
